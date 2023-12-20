"use client";
import { Container, Flex, Image, SimpleGrid } from "@mantine/core";
import React from "react";
import classes from "./ImagesSection.module.css";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const ImagesSection = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Container size={"xl"} mb={120}>
      <SimpleGrid cols={matches ? 1 : 2} spacing={matches ? 30 : 60}>
        <div style={{ overflow: "hidden" }}>
          <Image
            src={data?.leftImage}
            className={classes.images}
            height={364}
            fit="cover"
            alt=""
          />
        </div>
        <div style={{ overflow: "hidden" }}>
          <Image
            src={data?.rightImage}
            className={classes.images}
            height={364}
            fit="cover"
            alt=""
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default ImagesSection;
