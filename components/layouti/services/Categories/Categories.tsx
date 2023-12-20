"use client";
import React from "react";
import classes from "./Categories.module.css";
import { Container, SimpleGrid, Text, rem } from "@mantine/core";
import LayoutiSectionHeader from "../../Home/LayoutiSectionHeader/LayoutiSectionHeader";
import HTMLReactParser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";
import WorksCard from "../../global/WorksCard/WorksCard";
type Props = any;

const Categories = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {data?.map((mainItem: any, i: any) => (
        <div key={i}>
          <LayoutiSectionHeader data={mainItem} />
          <Container size={"xl"}>
            {mainItem?.cards?.map((item: any, j: any) => (
              <div key={j}>
                <Text
                  size={matches ? rem("30px") : "30px"}
                  fw={700}
                  lh={matches ? rem("36px") : "36px"}
                  c={"#212529"}
                  mb={20}
                >
                  {item?.category?.name}
                </Text>

                <Text
                  size={matches ? "16px" : "20px"}
                  fw={400}
                  lh={matches ? "26px" : "30px"}
                  c={"#212529"}
                  className={classes?.desc}
                  w={matches ? "100%" : "50%"}
                  mb={40}
                >
                  {HTMLReactParser(item?.description)}
                </Text>

                <SimpleGrid
                  cols={matches ? 1 : 3}
                  spacing={matches ? 20 : 60}
                  mb={80}
                >
                  {item?.projects?.map((proj: any, k: any) => (
                    <WorksCard data={proj} key={k} />
                  ))}
                </SimpleGrid>
              </div>
            ))}
          </Container>
        </div>
      ))}
    </>
  );
};

export default Categories;
