"use client";
import React from "react";
import classes from "./AboutThroughOurValues.module.css";
import { Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";
import HTMLReactParser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const AboutThroughOurValues = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.root}>
      <Container size={"xl"}>
        <Text size="40px" fw={700} lh={"50px"} c={"#212529"} mb={80}>
          {data?.title}
        </Text>
        <SimpleGrid cols={matches ? 1 : 2} spacing={matches ? 50 : 60}>
          {data?.cards?.map((item: any, i: any) => (
            <Flex direction={"column"} gap={20} key={i}>
              <Image
                src={item?.image}
                fit="contain"
                styles={{
                  root: {
                    objectPosition: "left",
                    width: "70px",
                    height: "70px",
                  },
                }}
                alt=""
              />
              <Text size="32px" fw={600} lh={"36px"} c={"#212529"}>
                {item?.name}
              </Text>
              <Text
                size="18px"
                fw={400}
                lh={"26px"}
                c={"#212529"}
                className={classes.desc}
              >
                {HTMLReactParser(item?.description)}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default AboutThroughOurValues;
