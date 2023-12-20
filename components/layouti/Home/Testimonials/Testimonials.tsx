"use client";
import BtnClasses from "../../../../Styles/Global/Buttons.module.css";
import React from "react";
import classes from "./Testimonials.module.css";
import {
  Avatar,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";

import StickyBox from "react-sticky-box";
import { IconQuote } from "@tabler/icons-react";
import HTMLReactParser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";

type Props = any;

const Testimonials = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes?.testimonials}>
      <Container size={"xl"}>
        {matches && (
          <Text
            size={matches ? rem("32px") : "50px"}
            fw={700}
            lh={matches ? rem("42px") : "60px"}
            c={"#212529"}
            mb={30}
          >
            {data?.title}
          </Text>
        )}
        <SimpleGrid cols={matches ? 1 : 2} spacing={"60px"} pos={"relative"}>
          {!matches && (
            <StickyBox offsetTop={200} offsetBottom={0}>
              <Flex direction={"column"} className={classes.stikySection}>
                <Text size="50px" lh={"60px"} fw={700} c={"#212529"}>
                  {data?.title}
                </Text>
                <Text
                  size="18px"
                  lh={"27px"}
                  fw={400}
                  c={"#212529"}
                  w={470}
                  my={20}
                  className={classes?.desc}
                >
                  {HTMLReactParser(data?.description)}
                </Text>
                <Button
                  className={BtnClasses.button}
                  px={30}
                  radius="xl"
                  color="layoutigreen"
                  c={"layoutidark"}
                  size={"16px"}
                  fw={700}
                  lh={"30px"}
                  w={240}
                  h={50}
                >
                  Request a proposal
                </Button>
              </Flex>
            </StickyBox>
          )}
          <Flex direction={"column"} gap={20}>
            {data?.cards?.map((item: any, i: any) => (
              <Flex direction={"column"} bg={"#fff"} p={30} key={i}>
                <IconQuote color="#26C62B" size={35} stroke={3} />
                <Text size="16px" lh={"24px"} fw={400} c={"#212529"} my={16}>
                  {item?.description}
                </Text>
                <Flex gap={20} align={"center"}>
                  {!matches && <Avatar src={item?.image} size={80} />}
                  <Flex direction={"column"} gap={5}>
                    <Text size="18px" lh={"22px"} fw={700} c={"#212529"}>
                      {item?.title}
                    </Text>
                    <Text size="16px" lh={"24px"} fw={400} c={"#212529"}>
                      {item?.jobTitle}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </SimpleGrid>
        {matches && (
          <Button
            className={BtnClasses.button}
            px={30}
            radius="xl"
            color="layoutigreen"
            c={"layoutidark"}
            size={"16px"}
            fw={700}
            lh={"30px"}
            w={"100%"}
            h={50}
            mt={30}
          >
            Request a proposal
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Testimonials;
