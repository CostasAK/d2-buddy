import BackToTopButton from "components/BackToTopButton";
import { Helmet } from "react-helmet";
import { When } from "react-if";

const { Box, Typography, Container } = require("@mui/material");

export const Page = ({ title, description, children }) => {
  return (
    <Box as="main" id="main" sx={{ marginBlock: 2 }}>
      <Container maxWidth="xl" sx={{ marginBlock: 2 }}>
        <When condition={!!title || !!description}>
          <Box sx={{ alignSelf: "flex-start", marginBottom: 4 }}>
            <When condition={!!title}>
              <Helmet>
                <title>{`${title} - ${process.env.REACT_APP_SHORT_TITLE}`}</title>
              </Helmet>
              <Typography variant="h1">{title}</Typography>
            </When>
            <When condition={!!description}>
              <Typography variant="body1">{description}</Typography>
            </When>
          </Box>
        </When>
        {children}
      </Container>
      <BackToTopButton />
    </Box>
  );
};
