import { Else, If, Then } from "react-if";

import { Box } from "@mui/material";
import Card from "../../components/Card";
import Loading from "components/Loading";
import Page from "layout/Page";
import { useQuery } from "react-query";

export default function Links(props) {
  const { data: links, isLoading } = useQuery(["buddyDatabase", "links"]);

  return (
    <Page
      title="Links"
      description="I have no affiliation with the sites listed. I just think they're great."
    >
      <If condition={isLoading}>
        <Then>
          <Loading size="page" fadeIn="none" />
        </Then>
        <Else>
          <Box
            sx={{
              display: "grid",
              rowGap: "7px",
              columnGap: "6px",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 45ch), 1fr))",
            }}
          >
            {links
              ?.sort((a, b) =>
                a?.title?.toLowerCase()?.localeCompare(b?.title?.toLowerCase())
              )
              .map((link) => (
                <Card
                  key={link?.title}
                  link={link?.url}
                  icon={link?.icon}
                  title={link?.title}
                  className="link"
                  floatIcon
                >
                  {link?.description}
                </Card>
              ))}
          </Box>
        </Else>
      </If>
    </Page>
  );
}
