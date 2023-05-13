import { Box, Divider, Stack, Typography } from "@mui/material";

import DestinyIcon from "components/DestinyIcon";
import { Img } from "components/Img/Img";
import Page from "layout/Page";
import { WeaponLinks } from "components/DestinyWeapon/WeaponLinks";
import { getScreenshot } from "functions/getScreenshot";
import getWeaponType from "functions/getWeaponType";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useWeaponElement } from "hooks/useWeaponElement";

export const WeaponPage = (props) => {
  const { hash } = useParams();

  let { data, error, isLoading } = useQuery(
    ["DestinyInventoryItemDefinition", hash],
    { enabled: !!hash }
  );

  const { weaponElement: element, someIsLoading: elementIsLoading } =
    useWeaponElement(data?.defaultDamageTypeHash);

  const name = data?.displayProperties?.name;

  const type = getWeaponType(data);

  const tier = data?.inventory?.tierTypeName;
  const screenshot = getScreenshot(data);

  return (
    <Page title={name}>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16 / 9",
          objectFit: "cover",
          backgroundSize: "cover",
          maxWidth: "1280px",
          maxHeight: "720px",
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <WeaponLinks hash={hash} />
      </Box>
      <Stack
        direction="row"
        spacing={1}
        pr={1}
        width="max-content"
        backgroundColor={tier?.toLowerCase()}
      >
        <Img
          src={data?.displayProperties?.icon}
          sx={{
            border: "2px solid",
            borderColor: "text.primary",
            height: 1.5 * (36 / 22 + 1) + "rem",
            aspectRatio: "1 / 1",
          }}
        />
        <Box width="max-content">
          <Typography variant="h3" width="max-content">
            {name}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
          >
            <Box>{tier}</Box>
            <Stack direction="row" spacing={0.5}>
              <DestinyIcon icon={["elements", element]} color={element} />
              <Box>{element}</Box>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <DestinyIcon icon={["weapons", type]} />
              <Box>{type}</Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Page>
  );
};
