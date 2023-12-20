import LayoutiSectionHeader from "../../../components/layouti/Home/LayoutiSectionHeader/LayoutiSectionHeader";
import { HeroContentLeft } from "../../../components/layouti/global/LayoutiHero/HeroContentLeft";
import WorksCategories from "../../../components/layouti/works/WorksCategories/WorksCategories";

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/work`, {
    cache: "no-store",
  });
  return res.json();
}
export default async function WorksPage() {
  const data = await getData();

  return (
    <>
      <HeroContentLeft
        btnData={{ title: "Reach out", link: "/works" }}
        data={data?.data?.WorkHeaderContent}
      />
      <LayoutiSectionHeader data={data?.data?.WorkWeFiredUpInnovated} />
      <WorksCategories data={data?.data} />
    </>
  );
}
