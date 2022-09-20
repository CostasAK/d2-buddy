import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Else, If, Then, When } from "react-if";

import A from "../A";
import DestinyIcon from "../DestinyIcon";
import Img from "../Img";
import Loading from "components/Loading";
import Modal from "../Modal";
import { getScreenshot } from "../../functions/getScreenshot";
import getWeaponType from "../../functions/getWeaponType";
import tierToColor from "functions/tierToColor";
import { useQuery } from "react-query";
import { useWeaponElement } from "hooks/useWeaponElement";
import { weaponSites } from "constants/weaponSites";

function WeaponLinks({ id }) {
  const linksBackground = "rgb(0 0 0 / 50%)";
  const gap = "1rem";

  return (
    <List
      dense
      sx={{
        width: "max-content",
        backgroundImage: `linear-gradient(
            0deg,
            ${linksBackground} 0%,
            ${linksBackground} 100%
          ),
          linear-gradient(
            0deg,
            rgb(0 0 0 / 0%) 0%,
            ${linksBackground} 100%
          ),
          radial-gradient(
            farthest-side at top left,
            ${linksBackground} 0%,
            rgb(0 0 0 / 0%) 100%
          ),
          linear-gradient(
            -90deg,
            rgb(0 0 0 / 0%) 0%,
            ${linksBackground} 100%
          )`,
        backgroundSize: `calc(100% - ${gap}) calc(100% - ${gap}),
          calc(100% - ${gap}) ${gap}, ${gap} ${gap},
          ${gap} calc(100% - ${gap})`,
        backgroundPosition: "0 0, bottom left, bottom right, right top",
        backgroundRepeat: "no-repeat",
        padding: `0.25rem ${gap} ${gap} 0`,
      }}
    >
      {weaponSites.map((site) => (
        <ListItem key={site.name} sx={{ padding: 0 }}>
          <ListItemButton
            component={A}
            href={site.url + id}
            sx={{ paddingInline: "0.5rem", gap: "0.5rem" }}
          >
            <When condition={site.icon}>
              <Img src={site.icon} height="2em" />
            </When>
            <ListItemText
              primary={site.name}
              primaryTypographyProps={{ fontStyle: "normal" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export function DestinyWeapon({ id, name }) {
  let { data, error, isLoading } = useQuery([
    "DestinyInventoryItemDefinition",
    id,
  ]);

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
        <Stack spacing={0.5} direction="row">
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
            <Stack spacing={0.5} direction="row">
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
              <WeaponLinks id={id} />
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
