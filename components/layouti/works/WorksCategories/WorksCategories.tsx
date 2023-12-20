"use client";
import {
  Container,
  Flex,
  SegmentedControl,
  Select,
  SimpleGrid,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "./WorksCategories.module.css";
import WorksCard from "../../global/WorksCard/WorksCard";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const WorksCategories = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");
  const [category, setCategory] = useState("All");
  const [works, setWorks] = useState(data?.Projcts);

  async function getData(e: any) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/work?category=${e == "All" ? "" : e}`,
      {
        cache: "no-store",
      }
    );
    const data: any = await res.json();
    setWorks(data?.data?.Projcts);
  }

  return (
    <Container size={"xl"}>
      <Flex align={"center"} justify={"left"}>
        {!matches ? (
          <SegmentedControl
            data={["All"].concat(
              data?.categories?.map((item: any) => item?.name)
            )}
            value={category}
            onChange={(e) => (setCategory(e), getData(e))}
            color="layoutigreen"
            classNames={classes}
            radius="xl"
            size="lg"
            mb={50}
          />
        ) : (
          <Select
            checkIconPosition="right"
            data={["All"].concat(
              data?.categories?.map((item: any) => item?.name)
            )}
            value={category}
            onChange={(e: any) => (setCategory(e), getData(e))}
            style={{}}
            size="lg"
            w={"100%"}
            mb={30}
          />
        )}
      </Flex>

      <SimpleGrid cols={matches ? 1 : 2} spacing={matches ? 20 : 60} mb={60}>
        {works?.map((item: any, i: any) => (
          <WorksCard data={item} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default WorksCategories;
