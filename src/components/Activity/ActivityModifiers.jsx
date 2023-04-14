import { ActivityChampions, ActivityModifier, ActivityShields } from ".";
import { Box, Typography } from "@mui/material";

import Loading from "../Loading";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import getKnownActivityAmounts from "../../functions/getKnownActivityAmounts";
import { useQueries } from "@tanstack/react-query";

export const ActivityModifiers = forwardRef(({ data }, ref) => {
  const modifiers = useQueries({
    queries: data?.modifiers?.map((modifier) => {
      return {
        queryKey: [
          "DestinyActivityModifierDefinition",
          modifier.activityModifierHash,
        ],
      };
    }),
    enabled: !!data?.modifiers,
  });

  if (!modifiers.every((modifier) => modifier.isSuccess)) {
    if (modifiers.some((modifier) => modifier.isLoading))
      return (
        <section ref={ref} className="activity-modifiers">
          <Loading size="section" />
        </section>
      );

    modifiers
      .filter((modifier) => modifier.error)
      .map((modifier) => console.error(modifier.error));
    return null;
  }

  const { known_shields, known_champions } = getKnownActivityAmounts(
    data?.hash
  );

  const modifier_data = modifiers
    .filter((modifier) => modifier.isSuccess && modifier.data)
    .map((modifier) => modifier.data);

  const shields = modifier_data.filter((modifier) =>
    /shielded foes/i.test(modifier.displayProperties.name)
  );

  const champions = modifier_data.filter((modifier) =>
    /champion foes/i.test(modifier.displayProperties.name)
  );

  const other_modifiers = modifier_data.filter(
    (modifier) =>
      !/(shielded|champion) foes|champions: mob| modifiers$/i.test(
        modifier.displayProperties.name
      )
  );

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 2,
        "> *": { flex: "1 1 auto" },
      }}
    >
      {shields.length > 0 && (
        <ActivityShields shields={shields} known_shields={known_shields} />
      )}
      {champions.length > 0 && (
        <ActivityChampions
          champions={champions}
          known_champions={known_champions}
        />
      )}
      {other_modifiers.length > 0 && (
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              borderBottom: "1pt solid rgb(255 255 255 / 50%)",
              marginBottom: 1,
            }}
          >
            Modifiers
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`,
              gap: 2,
            }}
          >
            {other_modifiers.map((modifier, index) => (
              <ActivityModifier key={index} data={modifier} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
});

ActivityModifiers.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifiers.defaultProps = {};
