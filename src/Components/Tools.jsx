import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Tools = () => {
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
        {/* <h3>Tools</h3> */}
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
            <Image className="skills-card-img" src="/github.png" />
            <Heading className="skills-card-name">GitHub</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image
              className="skills-card-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAqFBMVEX///9YqlBJnUqmo4Vbq1RPoE5GnEdWp1L7/fs/mkBNpkQ7mDxRo0/3+/dDm0ROqUXEwqvB3MFbp1vr9OpTqUuw0q/c7NqAvnpusG7K4Mrl8eTD4MGq0aupo4jn6OCVypJjsV2n0aO12bIvkzGJwoaIvol6vnRvuWiezJqcyJ1GpTyTxJNnrWfU6NFcslR2s3ZnoV13oWmGpnKbpX97qWvd2tC3tp7My7sIgsQcAAAEZElEQVR4nO2bi1biQAxAp0MZW6EFKSIPUXkssArrg1X//8+2rVhomwwKyQx7jvmAnnuSTN4V4kjxOsd+gUC828g2ghDB3YVtBCFWjaVtBCHmjm9dFaNzV7YsM4wbrludWFWFN207jlNV9b49hujqPGZw6tL/5VljmKUMTlVK/9oWw7ydMsSakHJyaYdhtmFIIWRogyLIGD4glDL/RLyNP2QQUpmPWdNMD58QUoU9swzjrR4c50xuKKpGs3pvRw+ZJmLnbAXmGDo5hi2ESQpv3nYdwByx+A+mQueokVPELoT0DYWLVd4YeQjpG3kiWbSGIVRowi0W564OIs6o/AydgkMkIvMU/JGzZIwShGpxlziD+zJD3hz8BgnmZYYShKzxvpARYIwyhKpyhqwIUkQZQtY4QxaoCMctQagWX38a/IEYAE1I/zcbxBiIEaAmGJ8p+DRgCBlyqaIHxIhUAAjlM6WQK9AtYQhZ42mHOrBbIhCKp8iC3ycGIVladQ9KXahjxq7ZZYDooIqAIaRiaABwayAQ4QM5QzDDGFBN0LtmH46WGgiGmjfX+H0Ngt4eU9QlUAhye0R3KAMKISfE9ujg1sAhfGJ7jA6BUEtae6DJKxEMQtZo45XGJXBNEE8W+2gG1WqCNn+UOvGvQcgqpVNcavxSB0E6S7s9UBOkMxPt48AdUyrKthSps/dCUHpmUJyLfNUcinAppH+hOnPU6fpBvLTbAyFDuk5shVc0eyB8usDdOxiCcF4y0MYqLQRd93EEBF200hSYpwKhiROUffH/AFE9dQg6n9C/DkMQF4dD0MUJfdjWOiZdxIT2C8YhIm0q15mDMIHtKWo0EIpwqIrOq1Kp4wyUNb9mMKDVhKI8fxofCjElhNB3YDhEOCKEiHQMGgjasdXsoNGApL190g1JcE1Qth1iT8xEIULa5SS2cNFDEKavVBYae6AQhP1XKrpEikGEj8T7UZ09UGuQb3++PeWPowT5SvDb+w56awjNtAad8jMsqy++twOL0zjDrjrAQre5zU8sA+SVIhB1liM4D3mlwMI+UQRlKbEjq3uw1oQhJlzXgLBXgBDhIxMDUmCBEBO+E6MFRAEV25wXRn1o7wFogvfWCrqzAjTBeM6SCNCBlCHCLu9ZZnRXpHBbJQji3VdZSinEfVJmjZFIsfA+K0L4HJcTRSnk9NZzHoL/CjGRyMlRLF/CvFeauWTPB86nPESN3yE+ZHea1/673jWHz5Q8Adk5gGu/VHZKfv/R4BH7thdKIDJV+F2jv8ctPnXRXg+zNxoynkBC4mV37Ovhp2f6S+O/CW504VYq69AWgxDXDScu954qlWEroah1DfrkVgbt5IUOY1Uokz80FGTltOPHEaviOfQvrf2P1pnfryuJPK9sIcTiPQxTiFeLDELcpAxv1mzxISnEu10G0UwgbixDvCYQViLEjiROMbQNEcQQTct+KbxTgBBvpwDR/IHYyPsPxIlB2M5fady2DyGC1+aRYfsfIvFPV1viKYIAAAAASUVORK5CYII="
            />
            <Heading className="skills-card-name">Mongo DB</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image
              className="skills-card-img"
              src="data:image/jpeg;base64,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"
            />
            <Heading className="skills-card-name">Cypress</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image className="skills-card-img" src="/visual-studio.png" />
            <Heading className="skills-card-name">VS Code</Heading>
          </Box>
          <Box
            className="skills-card"
            minH={"200px"}
            minW={"200px"}
            textAlign={"center"}
          >
            <Image
              className="skills-card-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyO0C7xBtM_nDhycjDNCooJ4uhcpZUjzMiMKLJ74P6Q&s"
            />
            <Heading className="skills-card-name">NPM</Heading>
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
            <Heading className="skills-card-name">Postman</Heading>
          </Box>
        </Flex>
      </Flex>
    </section>
  );
};

export default Tools;
