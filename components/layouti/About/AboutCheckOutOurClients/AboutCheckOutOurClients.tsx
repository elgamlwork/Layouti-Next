"use client";
import { Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import LayoutiSectionHeader from "../../Home/LayoutiSectionHeader/LayoutiSectionHeader";
import HTMLReactParser from "html-react-parser";
import classes from "./AboutCheckOutOurClients.module.css";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const AboutCheckOutOurClients = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.root}>
      <LayoutiSectionHeader data={data} />
      <Container size={"xl"} mt={80} mb={100}>
        <SimpleGrid cols={matches ? 1 : 3} spacing={matches ? 50 : 60}>
          {data?.cards?.map((item: any, i: any) => (
            <Flex direction={"column"} gap={20} key={i}>
              <img
                src={item?.image}
                style={{
                  objectPosition: "left",
                  width: "235px",
                  height: "60px",
                  objectFit: "contain",
                }}
                alt=""
              />

              <Text
                size="18px"
                fw={400}
                lh={"26px"}
                c={"#212529"}
                className={classes.desc}
              >
                {HTMLReactParser(item?.description)}
              </Text>
              <Text size="16px" fw={400} lh={"24px"} c={"#b0abab"}>
                {item?.industry}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default AboutCheckOutOurClients;
