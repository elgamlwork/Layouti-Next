"use client";

import React from "react";
import { Button, Container, Flex, SimpleGrid, Text } from "@mantine/core";
import BtnClasses from "../../../../Styles/Global/Buttons.module.css";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const Things = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Container size={"xl"} mb={matches ? 80 : 140}>
      <SimpleGrid cols={matches ? 1 : 2} spacing={matches ? 30 : 60}>
        {data?.cards?.map((item: any, i: any) => (
          <Flex direction={"column"} key={i}>
            <Text size="28px" fw={700} lh={"60px"} c={"#23262b"} mb={16}>
              {item?.title}
            </Text>
            <Text size="18px" fw={400} lh={"30px"} c={"#23262b"} mb={16}>
              {item?.description?.substring(0, 261)}...
            </Text>
            <Text size="16px" fw={400} lh={"24px"} c={"#6c757d"} mb={16}>
              {item?.date}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      <Button
        className={BtnClasses.button}
        px={30}
        radius="xl"
        color="layoutigreen"
        c={"layoutidark"}
        size={"16px"}
        fw={700}
        lh={"30px"}
        w={matches ? "100%" : 240}
        h={50}
        mt={20}
      >
        Read more
      </Button>
    </Container>
  );
};

export default Things;
