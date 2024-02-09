import React from "react";
import {
  Box,
  Container,
  Divider,
  Toolbar,
  Button,
  Hidden,
} from "@mui/material";
import SocialLinks from "./SocialLinks";

const sections = [
  { title: "概要", ref: "whatIsRef" },
  { title: "メリット", ref: "whyDoRef" },
  { title: "実施方法", ref: "howToRef" },
  { title: "実施例", ref: "mediaRef" },
  { title: "参考", ref: "resourceRef" },
  { title: "コメント", ref: "discussRef" },
];

export default function PageMenu(props) {
  const scrollTo = (ref) => {
    props[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Box
      position="sticky"
      top={0}
      bgcolor="white"
      marginBottom={3}
      zIndex="appBar"
    >
      <Toolbar component="nav">
        <Container maxWidth="md">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Hidden smDown>
                {sections.map((section, i) => (
                  <Button
                    key={section.title}
                    disableElevation
                    onClick={() => scrollTo(section.ref)}
                    size="small"
                    variant="text">
                    {section.title}
                  </Button>
                ))}
              </Hidden>
            </Box>
            <Box>
              <SocialLinks
                coverImage={props.coverImage}
                practiceId={props.practiceId}
                upvotes={props.upvotes}
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
      <Divider />
    </Box>
  );
}
