"use client";
import React from "react";
import classes from "./ProcessTimeline.module.css";
import { Container, Flex, Group, Image, Text, rem } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mantine/hooks";
type Props = any;

const ProcessTimeline = ({ data }: Props) => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Container my={matches ? 60 : 100} size={"xl"}>
      <Group mb={matches ? 30 : 50}>
        <Text size={rem("32px")} fw={700} lh={rem("45px")} c={"layoutidark"}>
          {data?.title}
        </Text>
      </Group>
      <Swiper
        spaceBetween={20}
        slidesPerView={matches ? 1 : 3}
        grabCursor
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        freeMode
        modules={[Autoplay]}
      >
        {data?.cards.map((item: any, i: any) => (
          <SwiperSlide className={classes.slide} key={i}>
            <Flex className={classes.card} direction={"column"}>
              <Image
                src={item?.icon}
                className={classes.brand_img}
                alt=""
                styles={{
                  root: {
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  },
                }}
              />
              <Text
                size={rem("30px")}
                fw={700}
                lh={rem("40px")}
                c={"layoutidark"}
                mt={50}
                mb={20}
              >
                {item?.title}
              </Text>
              <Text
                size={rem("18px")}
                fw={400}
                lh={rem("27px")}
                c={"layoutidark"}
              >
                {item?.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProcessTimeline;
