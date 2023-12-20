"use client";
import { Container, SimpleGrid } from "@mantine/core";
import React from "react";
import TeamsCard from "./TeamsCard";
import { useMediaQuery } from "@mantine/hooks";

type Props = any;

const Team = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");
  return (
    <Container size={"xl"} pb={80}>
      <SimpleGrid cols={matches ? 1 : 4} spacing={matches ? 30 : 60}>
        {data?.cards?.map((item: any, i: any) => (
          <TeamsCard data={item} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Team;
