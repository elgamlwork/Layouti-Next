"use client";
import { Overlay, Container, Title, Button, Text, rem } from "@mantine/core";
import classes from "./HeroContentLeft.module.css";
import Parser from "html-react-parser";
import BtnClasses from "../../../../Styles/Global/Buttons.module.css";
import { useMediaQuery } from "@mantine/hooks";

export function HeroContentLeft({ data, noBtn, btnData }: any) {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url("${data?.image}")` }}
    >
      <Overlay bg="rgba(0, 18, 47, 0.87)" opacity={1} zIndex={0} />
      <Container className={classes.container} size="xl">
        <Text
          size={matches ? rem("35px") : rem("50px")}
          w={matches ? "85%" : "55%"}
          fw={700}
          lh={matches ? "45px" : "60px"}
          c={"#fff"}
        >
          {data?.title}
        </Text>
        {!matches && (
          <Text
            size={"18px"}
            fw={400}
            lh={"26px"}
            c={"#fff"}
            my={"16px"}
            w={"50%"}
            className={classes.describtion}
          >
            {Parser(data?.description)}
          </Text>
        )}

        {!noBtn && !matches && (
          <Button
            className={BtnClasses.button}
            px={30}
            radius="xl"
            color="layoutigreen"
            c={"layoutidark"}
            size={"16px"}
            fw={700}
            lh={"30px"}
            w={240}
            h={50}
            mt={40}
            component="a"
            href={btnData?.link}
          >
            {btnData?.title}
          </Button>
        )}
      </Container>
    </div>
  );
}
