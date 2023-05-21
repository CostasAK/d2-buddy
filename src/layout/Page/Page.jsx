import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Else, If, Then, When } from "react-if";

import { Helmet } from "react-helmet";
import { Img } from "components/Img/Img";
import { cssRgb } from "functions/cssRgb";
import { isValidElement } from "react";
import useDimensions from "react-cool-dimensions";

export const Page = ({
  title,
  subtitle,
  supertitle,
  description,
  icon,
  banner,
  sx = [],
  children,
  ...props
}) => {
  const theme = useTheme();

  const { observe, currentBreakpoint } = useDimensions({
    breakpoints: { fill: 0, gradient: 1488 },
    updateOnBreakpointChange: true,
  });

  return (
    <Container
      ref={observe}
      maxWidth="xl"
      sx={[
        {
          marginBlock: 2,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <When
        condition={[title, subtitle, supertitle, description, banner].some(
          (x) => !!x
        )}
      >
        <Box
          sx={{
            alignSelf: "flex-start",
            marginBottom: 4,
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
          }}
        >
          <When
            condition={[title, subtitle, supertitle, banner].some((x) => !!x)}
          >
            <Box
              sx={[
                {
                  alignSelf: "flex-start",
                  minHeight: banner ? "12rem" : 27,
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "flex-end",
                  alignItems: "stretch",
                },
                ...(banner
                  ? [
                      {
                        paddingBottom: 2,
                        textShadow: `1px 1px 0.25em ${theme.palette.background.default},
                    1px -1px 0.25em ${theme.palette.background.default},
                    -1px 1px 0.25em ${theme.palette.background.default},
                    -1px -1px 0.25em ${theme.palette.background.default}`,
                        height: "fit-content",
                        width: "100%",
                        position: "relative",
                        "& .MuiTypography-root img": {
                          filter: `drop-shadow(1px 1px ${0.25 / 1.5}em ${cssRgb(
                            theme.palette.background.default,
                            0.5
                          )}) drop-shadow(1px -1px ${0.25 / 1.5}em ${cssRgb(
                            theme.palette.background.default,
                            0.5
                          )}) drop-shadow(-1px 1px ${0.25 / 1.5}em ${cssRgb(
                            theme.palette.background.default,
                            0.5
                          )}) drop-shadow(-1px -1px ${0.25 / 1.5}em ${cssRgb(
                            theme.palette.background.default,
                            0.5
                          )}) `,
                        },
                        "& .MuiTypography-root span:has(> img) + *": {
                          zIndex: 1,
                        },
                        "&:before": {
                          opacity: 0.9,
                          content: "''",
                          position: "absolute",
                          zIndex: -1,
                          backgroundImage: `url(${banner})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          top: "-2rem",
                          right: "-1.5rem",
                          bottom: 0,
                          left: "-1.5rem",
                          maxWidth: "100vw",
                          maskImage:
                            currentBreakpoint === "gradient" &&
                            "linear-gradient(90deg, transparent, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 95%, transparent)",
                        },
                      },
                    ]
                  : []),
              ]}
            >
              <When condition={!!supertitle}>
                <Typography
                  variant="h5"
                  sx={{
                    opacity: 0.75,
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  {supertitle}
                </Typography>
              </When>
              <When condition={!!title || !!icon}>
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems="center"
                  sx={{
                    borderTop: supertitle && "1pt solid rgb(255 255 255 / 50%)",
                  }}
                >
                  <When condition={!!icon}>
                    <Box
                      sx={{
                        height: "3.5rem",
                      }}
                    >
                      <If condition={isValidElement(icon)}>
                        <Then>{icon}</Then>
                        <Else>
                          <Img src={icon} />
                        </Else>
                      </If>
                    </Box>
                  </When>
                  <When condition={!!title}>
                    <Helmet>
                      <title>{`${title} - ${process.env.REACT_APP_SHORT_TITLE}`}</title>
                    </Helmet>
                    <Typography variant="h1">{title}</Typography>
                  </When>
                </Stack>
              </When>
              <When condition={!!subtitle || !!banner}>
                <Typography sx={{ opacity: 0.75 }}>
                  {subtitle || " "}
                </Typography>
              </When>
            </Box>
          </When>
          <When condition={!!description}>
            <Typography variant="body1" paddingTop={banner && 1}>
              {description}
            </Typography>
          </When>
        </Box>
      </When>
      {children}
    </Container>
  );
};
