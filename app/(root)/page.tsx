import { Space } from "@mantine/core";
import { HeroContentLeft } from "../../components/layouti/global/LayoutiHero/HeroContentLeft";
import LayoutiSectionHeader from "../../components/layouti/Home/LayoutiSectionHeader/LayoutiSectionHeader";
import OurLatestWork from "../../components/layouti/Home/OurLatestWork/OurLatestWork";
import ProcessDesignSkills from "../../components/layouti/Home/ProcessDesignSkills/ProcessDesignSkills";
import Testimonials from "../../components/layouti/Home/Testimonials/Testimonials";
import WhatWeWillServe from "../../components/layouti/Home/WhatWeWillServe/WhatWeWillServe";
import Things from "../../components/layouti/Home/Things/Things";
import { useMediaQuery } from "@mantine/hooks";

async function getData() {
  const res = await fetch(`${process.env.APP_URL}`, { cache: "no-store" });
  return res.json();
}

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <HeroContentLeft noBtn data={data?.data?.HeaderContent} />
      <LayoutiSectionHeader data={data?.data?.WhatWeWillServe} />
      <WhatWeWillServe data={data?.data?.WhatWeWillServe} />
      <LayoutiSectionHeader data={data?.data?.OurLastWork} />
      <OurLatestWork data={data?.data?.OurLastWork?.lastwork} />
      <ProcessDesignSkills data={data?.data?.ProcessDesignSkills} />
      <Testimonials data={data?.data?.Testimonials} />
      <Space h={70}  className="space"/>
      <LayoutiSectionHeader data={data?.data?.Things} />
      <Things data={data?.data?.Things} />
    </>
  );
}
