import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  // const [skills] = useState([
  //   {
  //     image:
  //       "data:image/png;base64,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",
  //     name: "HTML",
  //   },
  //   {
  //     image:
  //       "https://camo.githubusercontent.com/64bfb64ead15f4d2fe66c1dd2b132a99b1caf1cddb77f57ad5815f9bf94a3d89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32312f4d61746c61625f4c6f676f2e706e67",
  //     name: "HTML",
  //   },
  //   {
  //     image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
  //     name: "HTML",
  //   },
  //   {
  //     image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
  //     name: "HTML",
  //   },
  //   {
  //     image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
  //     name: "HTML",
  //   },
  //   {
  //     image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
  //     name: "HTML",
  //   },
  // ]);
  return (
    <section id="skills">
      <div className="skills-title">
        <h3>Skills</h3>
      </div>
      <Flex className="skills-content">
        <Flex
          className="skills-container"
          flexWrap={"wrap"}
          gap={0}
          justifyContent="center"
        >
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/html.png" />
            <Heading className="skills-card-name">HTML</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/js.png" />
            <Heading className="skills-card-name">Javascript</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/css-3.png" />
            <Heading className="skills-card-name">CSS</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/bootstrap.png" />
            <Heading className="skills-card-name">Bootstrap</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/react.png" />
            <Heading className="skills-card-name">React</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image
              className="skills-card-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvCVkK_GhuAlZY0K7vbTWx51QhKpFCXvbVX2qwccpZA&s"
            />
            <Heading className="skills-card-name">Redux</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/redux.png" />
            <Heading className="skills-card-name">Chakra UI</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/node-js.png" />
            <Heading className="skills-card-name">Node.js</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image
              className="skills-card-img"
              src="data:image/png;base64,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"
            />
            <Heading className="skills-card-name">Express.js</Heading>
          </Box>
        </Flex>
      </Flex>
    </section>
  );
};

export default Skills;
