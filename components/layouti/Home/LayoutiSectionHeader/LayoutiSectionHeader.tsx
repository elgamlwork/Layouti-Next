"use client";
import React from "react";
import classes from "./LayoutiSectionHeader.module.css";
import { Container, SimpleGrid, Text, rem } from "@mantine/core";
import HTMLReactParser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const LayoutiSectionHeader = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Container size={"xl"} mt={matches ? rem("50px") : "70px"} mb={"50px"}>
        <SimpleGrid cols={matches ? 1 : 2} spacing={60}>
          <Text
            size={matches ? rem("32px") : "50px"}
            fw={700}
            lh={matches ? rem("42px") : "60px"}
            c={"#212529"}
          >
            {data?.title}
          </Text>
          {!matches && (
            <Text
              size="20px"
              fw={400}
              lh={"30px"}
              c={"#212529"}
              className={classes?.desc}
            >
              {HTMLReactParser(data?.description)}
            </Text>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default LayoutiSectionHeader;
