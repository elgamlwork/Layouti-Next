"use client";
import React from "react";
import classes from "./ProcessDesignSkills.module.css";
import { Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";
import HTMLReactParser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const ProcessDesignSkills = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.root}>
      <Container size={"xl"}>
        <SimpleGrid cols={matches ? 1 : 2} spacing={60}>
          <Text
            size={matches ? "32px" : "50px"}
            fw={700}
            lh={"60px"}
            c={"#ffffff"}
          >
            {data?.title}
          </Text>
          {!matches && (
            <Text
              size="16px"
              fw={400}
              lh={"30px"}
              c={"#ffffff"}
              className={classes?.desc}
            >
              {HTMLReactParser(data?.description)}
            </Text>
          )}
        </SimpleGrid>
        <SimpleGrid
          cols={matches ? 1 : 4}
          spacing={matches ? 0 : 30}
          mt={matches ? "10px" : "60px"}
        >
          {data?.cards?.map((item: any, i: any) => (
            <Flex direction={"column"} key={i}>
              {!matches && (
                <Image className={classes.image} src={item?.image} alt="" />
              )}
              <Text
                size="32px"
                fw={500}
                lh={"38px"}
                c={"#ffffff"}
                mt={50}
                mb={16}
              >
                {item?.title}
              </Text>
              {item?.processPoints?.map((point: any, i: any) => (
                <Text
                  size="16px"
                  fw={400}
                  lh={"24px"}
                  c={"#ffffff"}
                  mb={10}
                  key={i}
                >
                  {point}
                </Text>
              ))}
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default ProcessDesignSkills;
