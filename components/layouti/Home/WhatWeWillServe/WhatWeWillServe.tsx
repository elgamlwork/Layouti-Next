"use client";
import React from "react";
import { Container, Flex, SimpleGrid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const WhatWeWillServe = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Container size={"xl"} mb={matches ? 80 : 150}>
        <SimpleGrid
          cols={matches ? 1 : 3}
          spacing={matches ? 20 : 50}
          verticalSpacing={matches ? 30 : 50}
        >
          {data?.cards?.map((item: any, i: any) => (
            <Flex direction={"column"} key={i}>
              <Text
                size={matches ? "28px" : "40px"}
                fw={500}
                lh={matches ? "34px" : "48px"}
                c={"#212529"}
                mb={"20px"}
              >
                {item?.title}
              </Text>
              <Text size="20px" fw={400} lh={"30px"} c={"#212529"}>
                {item?.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default WhatWeWillServe;
