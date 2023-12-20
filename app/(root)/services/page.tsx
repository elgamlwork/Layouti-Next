import { HeroContentLeft } from "../../../components/layouti/global/LayoutiHero/HeroContentLeft";
import Categories from "../../../components/layouti/services/Categories/Categories";
import LearnAboutLayouti from "../../../components/layouti/services/LearnAboutLayouti/LearnAboutLayouti";
import ProcessTimeline from "../../../components/layouti/services/ProcessTimeline/ProcessTimeline";

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/services`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ServicesPage() {
  const data = await getData();

  return (
    <>
      <HeroContentLeft
        btnData={{ title: "Check out our works", link: "/works" }}
        data={data?.data?.HeaderContent}
      />
      <LearnAboutLayouti data={data?.data?.LearnAboutLayouti} />
      <ProcessTimeline data={data?.data?.ProcessTimeline} />
      <Categories data={data?.data?.Categories} />
    </>
  );
}
