import { Case, Else, If, Switch, Then } from "react-if";
import { Skeleton, Stack, Typography } from "@mui/material";

import DestinyIcon from "../DestinyIcon";
import { Img } from "components/Img/Img";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import getWeaponType from "../../functions/getWeaponType";
import { useQuery } from "@tanstack/react-query";
import { useWeaponElement } from "hooks/useWeaponElement";

export function Weapon({ hash, name, variant = "inline", noLink = false }) {
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
        <Switch>
          <Case condition={variant === "inline"}>
            <Stack
              component={!noLink && Link}
              to={!noLink && `/Weapons/${hash}`}
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
          </Case>
          <Case condition={variant === "icon"}>
            <Img
              src={data?.iconWatermark || data?.displayProperties?.icon}
              background={data?.iconWatermark && data?.displayProperties?.icon}
              sx={{
                border: `1pt solid rgba(255, 255, 255, 0.9)`,
                height: "100%",
                aspectRatio: "1 / 1",
              }}
            />
          </Case>
        </Switch>
      </Else>
    </If>
  );
}
