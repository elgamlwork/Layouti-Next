"use client";
import React from "react";
import classes from "./LearnAboutLayouti.module.css";
import { Container, Flex, Image, SimpleGrid, Text, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import HTMLReactParser from "html-react-parser";
type Props = any;

const LearnAboutLayouti = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.root}>
      <Container size={"xl"}>
        <SimpleGrid cols={matches ? 1 : 2} spacing={60}>
          <Flex direction={"column"} gap={matches ? 20 : 55}>
            <Text
              w={matches ? "100%" : rem("426px")}
              size={rem("40px")}
              fw={700}
              lh={rem("50px")}
              c="#23262B"
            >
              {data?.title}
            </Text>
            <Image
              src={data?.topImage}
              alt={data?.title}
              styles={{
                root: {
                  objectFit: "cover",
                  height: "507px",
                  width: "100%",
                  display: "block",
                },
              }}
            />
          </Flex>
          <Flex direction={"column"}>
            <Text
              size={matches ? rem("16px") : rem("20px")}
              lh={matches ? rem("26px") : rem("30px")}
              fw={400}
              c="#23262B"
              className={classes.desc}
            >
              {HTMLReactParser(data?.description)}
            </Text>
            <Text
              size={matches ? rem("16px") : rem("20px")}
              lh={matches ? rem("26px") : rem("30px")}
              fw={400}
              c="#23262B"
              className={classes.desc}
              mt={"20"}
            >
              {HTMLReactParser(data?.downImageDescription)}
            </Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default LearnAboutLayouti;
