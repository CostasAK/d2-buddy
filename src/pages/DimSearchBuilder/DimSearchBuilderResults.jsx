import Card from "../../components/Card/index";
import Masonry from "../../components/Masonry";
import { Tooltip } from "@mui/material";
import dayjs from "dayjs";
import { formatTime } from "functions/formatDateTime";
import { mixins } from "../../style/mixins";
import styled from "styled-components/macro";
import { theme } from "../../style/theme";

const searchStringStart = (name, filter = true) =>
  `/* ${name} | D2 Buddy | ${dayjs().format("YYYY-MM-DD")} ${formatTime()} */ ${
    filter
      ? "(is:weapon or is:armor or is:ghost or is:emblems or is:ships or is:vehicle) "
      : ""
  }`;

const StyledSection = styled.section`
  > h2 {
    ${mixins.headers.fullWidth};
  }

  > div,
  > section {
    ${mixins.grid.reading};
    gap: ${theme.lengths.cardGap};
  }
`;

const DimCard = ({ children, search, ...props }) => {
  return (
    <Tooltip title="Click to Copy">
      <Card {...props} onClick={() => navigator.clipboard.writeText(search)}>
        {children}
      </Card>
    </Tooltip>
  );
};

export const DimSearchBuilderResults = ({ toggles, toggleState }) => {
  const isEnabled = (option) => {
    const state =
      toggleState?.[option.key] !== undefined
        ? toggleState[option.key]
        : option.default;
    return state >= 0 && option.options[state] !== "Don't care";
  };

  const optionState = (option) => {
    return option.options[
      toggleState?.[option.key] !== undefined
        ? toggleState[option.key]
        : option.default
    ];
  };

  const valueState = (option) => {
    return toggleState[option.key + "Value"] !== undefined
      ? toggleState[option.key + "Value"]
      : option.value;
  };

  const getFilter = (option) =>
    Array.isArray(option.filter)
      ? option.filter[
          toggleState?.[option.key] !== undefined
            ? toggleState[option.key]
            : option.default
        ]
      : typeof option.filter === "function"
      ? option.filter(valueState(option))
      : option.filter;

  const enabledToggles = toggles
    .map((category) =>
      category.options
        .filter(isEnabled)
        .map((option) =>
          Object.assign(option, { category: category.display || "Top Level" })
        )
    )
    .flat();

  const enabledKeepToggles = enabledToggles.filter(
    (option) => optionState(option) !== "Trash"
  );

  const enabledTrashToggles = enabledToggles.filter(
    (option) => optionState(option) === "Trash"
  );

  const trashString = `${searchStringStart(
    "Trash"
  )} -is:locked ${enabledKeepToggles.reduce(
    (previous, current) => `${previous} -${getFilter(current)}`,
    ""
  )} (${enabledTrashToggles.reduce(
    (previous, current, index) =>
      `${previous} ${index ? "or" : ""} ${getFilter(current)}`,
    ""
  )}${
    enabledKeepToggles.some((toggle) => toggle.category === "Armor")
      ? " or (is:armor -(is:exotic -is:dupe))"
      : ""
  })`;

  const wishlistString = `${searchStringStart(
    "Wishlist",
    false
  )} is:wishlist or is:weaponmod or is:armormod ${enabledKeepToggles.reduce(
    (previous, current, index) => `${previous} or ${getFilter(current)}`,
    ""
  )}`;

  return (
    <StyledSection>
      <h2>Results</h2>
      <Masonry>
        <DimCard title="Trash" search={trashString}>
          This search will help you clear out your vault, highlighting items
          that you would probably consider trash.
        </DimCard>
        <DimCard title="Wishlist" search={wishlistString}>
          This search can be used to find desirable items in, for example, the
          Vendors tab.
        </DimCard>
      </Masonry>
    </StyledSection>
  );
};
