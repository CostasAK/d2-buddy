import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { Else, If, Then } from "react-if";

import DestinyIcon from "../DestinyIcon";
import Img from "../Img";
import Loading from "components/Loading";
import Modal from "../Modal";
import { WeaponLinks } from "components/DestinyWeapon/WeaponLinks";
import { getScreenshot } from "../../functions/getScreenshot";
import getWeaponType from "../../functions/getWeaponType";
import tierToColor from "functions/tierToColor";
import { useQuery } from "react-query";
import { useWeaponElement } from "hooks/useWeaponElement";

export function DestinyWeapon({ hash, name }) {
  let { data, error, isLoading } = useQuery(
    ["DestinyInventoryItemDefinition", hash],
    { enabled: !!hash }
  );

  if (error) {
    console.error(error);
  }

  const { weaponElement: element, someIsLoading: elementIsLoading } =
    useWeaponElement(data?.defaultDamageTypeHash);

  name ||= data?.displayProperties?.name;

  const type = getWeaponType(data);

  const tier = data?.inventory?.tierTypeName;
  const screenshot = getScreenshot(data);

  return (
    <If condition={error}>
      <Then>
        <Stack
          spacing={0.5}
          direction="row"
          sx={{ maxWidth: "max-content", display: "inline-flex" }}
        >
          <DestinyIcon
            icon={["controllers", "playstation", "Cross"]}
            color="grandmaster"
          />
          <Typography variant="body2">Weapon Error...</Typography>
        </Stack>
      </Then>
      <Else>
        <Modal
          triggerContent={
            <Stack
              spacing={0.5}
              direction="row"
              sx={{ maxWidth: "max-content", display: "inline-flex" }}
            >
              <If condition={isLoading || elementIsLoading}>
                <Then>
                  <Loading size="inline" />
                </Then>
                <Else>
                  <DestinyIcon icon={["weapons", type]} color={element} />
                </Else>
              </If>
              <If condition={name}>
                <Then>
                  <Typography>{name}</Typography>
                </Then>
                <Else>
                  <Skeleton animation="wave" width={128} />
                </Else>
              </If>
            </Stack>
          }
          filled
          tooltip={{
            title: `${tier} ${element} ${type}`,
            tooltipcolor: tierToColor(tier),
          }}
        >
          <>
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
          </>
        </Modal>
      </Else>
    </If>
  );
}
