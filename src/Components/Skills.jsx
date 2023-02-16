import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      image:
        "data:image/png;base64,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",
      name: "HTML",
    },
    {
      image:
        "https://camo.githubusercontent.com/64bfb64ead15f4d2fe66c1dd2b132a99b1caf1cddb77f57ad5815f9bf94a3d89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32312f4d61746c61625f4c6f676f2e706e67",
      name: "HTML",
    },
    {
      image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
      name: "HTML",
    },
    {
      image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
      name: "HTML",
    },
    {
      image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
      name: "HTML",
    },
    {
      image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
      name: "HTML",
    },
  ]);
  return (
        <section id="skills">

        
          <div style={{
            width:"80%",
            margin:"auto",
            textAlign:"center",
            // marginTop:"150px"
            // marginBottom:"50px"
          }} className="skills-title">
            <h3>Skills</h3>
          </div>
        <Flex border={"2px solid black"} borderTop="none" borderRight="none" borderLeft={"none"} p={"30px"} paddingTop="100px" w={"80%"} margin="auto">
          <Flex
            className="skills-container"
            flexWrap={"wrap"}
            gap={100}
            justifyContent="center"
          >
            <Box className="skills-card" minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/html.png" />
              <Heading className="skills-card-name">HTML</Heading>
            </Box>
            <Box className="skills-card" minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/js.png" />
              <Heading className="skills-card-name">Javascript</Heading>
            </Box>
            <Box className="skills-card" minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/css-3.png" />
              <Heading className="skills-card-name">CSS</Heading>
            </Box>
            <Box className="skills-card" minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/bootstrap.png" />
              <Heading className="skills-card-name">Bootstrap</Heading>
            </Box>
            <Box className="skills-card" minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/react.png" />
              <Heading className="skills-card-name">React</Heading>
            </Box>
            <Box className="skills-card"  minH={"200px"} minW={"200px"} textAlign={"center"}>
              <Image className="skills-card-img" src="/github.png" />
              <Heading className="skills-card-name">Git</Heading>
            </Box>
          </Flex>
        </Flex>
        </section>
  );
};

export default Skills;
