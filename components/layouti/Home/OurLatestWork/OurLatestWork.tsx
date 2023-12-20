"use client";
import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import WorksCard from "../../global/WorksCard/WorksCard";
import BtnClasses from "../../../../Styles/Global/Buttons.module.css";
import { useMediaQuery } from "@mantine/hooks";

type Props = any;

const OurLatestWork = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Container size={"xl"} my={60}>
      <SimpleGrid cols={matches ? 1 : 2} spacing={matches ? 20 : 60}>
        {data?.map((item: any, i: any) => (
          <WorksCard data={item} key={i} />
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
        mt={matches ? 40 : 60}
      >
        See Our Works
      </Button>
    </Container>
  );
};

export default OurLatestWork;
