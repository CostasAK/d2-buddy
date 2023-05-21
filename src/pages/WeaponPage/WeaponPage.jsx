import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { Else, If, Then, When } from "react-if";

import DestinyIcon from "components/DestinyIcon";
import Page from "layout/Page";
import { Weapon } from "components/Weapon";
import { WeaponLinks } from "components/Weapon/WeaponLinks";
import { getScreenshot } from "functions/getScreenshot";
import getWeaponType from "functions/getWeaponType";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useWeaponElement } from "hooks/useWeaponElement";

export const WeaponPage = (props) => {
  const { hash } = useParams();

  let { data } = useQuery(["DestinyInventoryItemDefinition", hash], {
    enabled: !!hash,
  });

  const { weaponElement: element, someIsLoading: elementIsLoading } =
    useWeaponElement(data?.defaultDamageTypeHash);

  const name = data?.displayProperties?.name;

  const type = getWeaponType(data);

  const tier = data?.inventory?.tierTypeName;
  const screenshot = getScreenshot(data);

  return (
    <Page
      title={name}
      icon={<Weapon hash={hash} variant="icon" />}
      subtitle={
        <Stack
          direction="row"
          spacing={1}
          divider={<Divider orientation="vertical" variant="middle" flexItem />}
        >
          <Box>{tier}</Box>
          <If condition={elementIsLoading}>
            <Then>
              <Skeleton animation="wave" width="8ch" />
            </Then>
            <Else>
              <Stack direction="row" spacing={0.5}>
                <DestinyIcon icon={["elements", element]} color={element} />
                <Box>{element}</Box>
              </Stack>
            </Else>
          </If>
          <Stack direction="row" spacing={0.5}>
            <DestinyIcon icon={["weapons", type]} />
            <Box>{type}</Box>
          </Stack>
        </Stack>
      }
      banner={screenshot}
    >
      <WeaponLinks hash={hash} />
      {[
        data?.displayProperties?.description,
        data?.flavorText,
        data?.displaySource,
      ].map((p, index) => (
        <When condition={p}>
          <Typography
            sx={{ "p+&": { marginTop: 2 } }}
            variant={index === 1 ? "body2" : "body1"}
          >
            {p}
          </Typography>
        </When>
      ))}

      <Typography
        variant="h2"
        sx={{
          clear: "both",
          marginTop: 4,
          textAlign: "center",
          marginInline: "auto",
        }}
      >
        {"🚧Under construction🚧"}
      </Typography>
    </Page>
  );
};
