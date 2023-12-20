import React from "react";
import classes from "./WorksCard.module.css";
import { Group, Image, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
type Props = any;

const WorksCard = ({ data }: Props) => {
  return (
    <div className={classes.worksCardConteiner}>
      <Image src={data?.thumbnailImage} alt="" className={classes.image} />
      <Group
        className={classes.worksCardTitle}
        bg={"#fafafa"}
        h={"100px"}
        justify="space-between"
        w={"100%"}
        px={40}
      >
        <Text size="19px" lh={"25px"} fw={600}>
          {data?.ProjectName?.name?.split("-")[0]}
        </Text>
        <IconArrowRight size={28} />
      </Group>
    </div>
  );
};

export default WorksCard;
