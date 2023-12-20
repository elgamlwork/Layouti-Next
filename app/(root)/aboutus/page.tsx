import AboutCheckOutOurClients from "../../../components/layouti/About/AboutCheckOutOurClients/AboutCheckOutOurClients";
import AboutThroughOurValues from "../../../components/layouti/About/AboutThroughOurValues/AboutThroughOurValues";
import ImagesSection from "../../../components/layouti/About/ImagesSection/ImagesSection";
import Team from "../../../components/layouti/About/team/Team";
import LayoutiSectionHeader from "../../../components/layouti/Home/LayoutiSectionHeader/LayoutiSectionHeader";
import { HeroContentLeft } from "../../../components/layouti/global/LayoutiHero/HeroContentLeft";

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/about`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function AboutPage() {
  const data = await getData();

  return (
    <>
      <HeroContentLeft
        btnData={{ title: "Check Out Our Works", link: "/works" }}
        data={data?.data?.AboutHeaderContent}
      />
      <div style={{ background: "#F7F9FC", display: "block", padding: "10px 0px" }}>
        <LayoutiSectionHeader data={data?.data?.AboutLearnAboutLayouti} />
        <ImagesSection data={data?.data?.AboutLearnAboutLayouti} />
      </div>
      <LayoutiSectionHeader data={data?.data?.AboutTeam} />
      <Team data={data?.data?.AboutTeam} />
      <AboutThroughOurValues data={data?.data?.AboutThroughOurValues} />
      <AboutCheckOutOurClients data={data?.data?.AboutCheckOutOurClients} />
    </>
  );
}
