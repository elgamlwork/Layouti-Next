import { Flex, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./Teams.module.css";
const TeamsCard = ({ data }: any) => {
  return (
    <Flex direction={"column"}>
      <div className={classes.imgContainer}>
        <Image src={data?.image} className={classes.image} alt="" />
      </div>
      <Text size="24px" fw={700} lh={"29px"} c={"#212529"} mt={16} mb={5}>
        {data?.name}
      </Text>
      <Text size="20px" fw={400} lh={"30px"} c={"#212529"}>
        {data?.jobTitle}
      </Text>
    </Flex>
  );
};

export default TeamsCard;
