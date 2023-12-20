"use client";
import {
  Text,
  Container,
  Group,
  rem,
  Image,
  Divider,
  SimpleGrid,
  Flex,
  Button,
  Accordion,
} from "@mantine/core";
import classes from "./FooterLinks.module.css";
import { IconArrowUpRight } from "@tabler/icons-react";
import Parser from "html-react-parser";
import { useMediaQuery } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";

const data = [
  {
    title: "Main Menu",
    links: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Works", link: "/works" },
      { label: "About", link: "/aboutus" },
      { label: "Contact Us", link: "#" },
      { label: "100 Things", link: "#" },
    ],
  },
  {
    title: "UI/UX Education",
    links: [
      { label: "ResourcHub", link: "#" },
      { label: "Design Process", link: "#" },
      { label: "Articles", link: "#" },
      { label: "Academy", link: "#" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "365Design", link: "#" },
      { label: "UI Avatar", link: "#" },
      { label: "Content Generator", link: "#" },
      { label: "Links", link: "#" },
      { label: "Products", link: "#" },
    ],
  },
  {
    title: "Help?",
    links: [
      { label: "Terms & Conditions", link: "#" },
      { label: "Sitemap", link: "#" },
    ],
  },
];

export function FooterLinks({ footerData }: any) {
  const matches = useMediaQuery("(max-width: 600px)");
  const path = usePathname();
  const router = useRouter();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component={"a"}
        href={link.link}
        onClick={(event) => (event.preventDefault(), router.push(link.link))}
        c={footerData.FooterColors.fontColor}
        fs={rem("16px")}
        fw={400}
        lh={"26px"}
        mb={"5px"}
        data-green={path == link.link ? true : undefined}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text
          className={classes.title}
          c={footerData.FooterColors.fontColor}
          fs={rem("20px")}
          fw={700}
          lh={"24px"}
          mb={"8px"}
        >
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  const groupsCollapce = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
        c={footerData.FooterColors.fontColor}
        fs={rem("16px")}
        fw={400}
        lh={"26px"}
        mb={"5px"}
      >
        {link.label}
      </Text>
    ));

    return (
      <>
        <Divider color={footerData?.FooterColors?.dividerColor} size={"2px"} />
        <Accordion.Item key={group.title} value={group.title}>
          <Accordion.Control>{group.title}</Accordion.Control>
          <Accordion.Panel>{links}</Accordion.Panel>
        </Accordion.Item>
      </>
    );
  });

  return (
    <>
      <div
        className={classes.beforeFoot}
        style={{ background: footerData?.FooterColors?.firstColor }}
      >
        <Container size={"xl"}>
          <SimpleGrid
            cols={matches ? 1 : 2}
            spacing={matches ? "20px" : "60px"}
          >
            <Flex direction={"column"}>
              <Text
                fs={rem("20px")}
                fw={700}
                lh={"37px"}
                mb={"30px"}
                c={footerData.FooterColors.fontColor}
              >
                Our Projects
              </Text>
              <Flex direction={"column"} gap={"20px"}>
                {footerData?.FooterOurProducts?.map((item: any, i: any) => (
                  <Group justify="space-between" key={i}>
                    <Group gap={20} align="center" justify="center">
                      <Image
                        src={item?.image}
                        styles={{
                          root: {
                            width: "45px",
                            height: "45px",
                            objectFit: "contain",
                          },
                        }}
                        alt="Logo"
                      />
                      <Text
                        fs={rem("18px")}
                        fw={400}
                        lh={"33px"}
                        c={footerData.FooterColors.fontColor}
                      >
                        {item?.title}
                      </Text>
                    </Group>
                    <Button
                      variant="outline"
                      color="layoutigreen"
                      radius={"xl"}
                      c={footerData.FooterColors.fontColor}
                      className={classes.linkButton}
                      component="a"
                      href={item?.link}
                    >
                      <IconArrowUpRight />
                    </Button>
                  </Group>
                ))}
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fs={rem("20px")}
                fw={700}
                lh={"37px"}
                mb={"30px"}
                c={footerData.FooterColors.fontColor}
              >
                In-house Products
              </Text>
              <Flex direction={"column"} gap={"20px"}>
                {footerData?.FooterInHouseWorks?.map((item: any, i: any) => (
                  <Group justify="space-between" key={i}>
                    <Group gap={20} align="center" justify="center">
                      <Image
                        src={item?.image}
                        styles={{
                          root: {
                            width: "45px",
                            height: "45px",
                            objectFit: "contain",
                          },
                        }}
                        alt="Logo"
                      />
                      <Text
                        fs={rem("18px")}
                        fw={400}
                        lh={"33px"}
                        c={footerData.FooterColors.fontColor}
                      >
                        {item?.title}
                      </Text>
                    </Group>
                    <Button
                      variant="outline"
                      color="layoutigreen"
                      radius={"xl"}
                      c={footerData.FooterColors.fontColor}
                      className={classes.linkButton}
                      component="a"
                      href={item?.link}
                    >
                      <IconArrowUpRight />
                    </Button>
                  </Group>
                ))}
              </Flex>
            </Flex>
          </SimpleGrid>
        </Container>
      </div>
      <Divider color={footerData?.FooterColors?.dividerColor} size={"2px"} />
      <footer
        className={classes.footer}
        style={{ background: footerData?.FooterColors?.meddleColor }}
      >
        <Container size={"xl"} className={classes.inner}>
          <div className={classes.logo}>
            <Image
              src={footerData?.FooterContent?.lightHeader}
              styles={{
                root: {
                  width: "144px",
                  height: "50px",
                  objectFit: "contain",
                },
              }}
            />
            <Text
              fs={rem("16px")}
              fw={700}
              lh={"26px"}
              mb={"16px"}
              mt={"16px"}
              c={footerData.FooterColors.fontColor}
            >
              {footerData?.FooterContent?.slogan}
            </Text>
            <Text
              fs={"16px"}
              lh={"24px"}
              fw={100}
              mb={"16px"}
              c={footerData.FooterColors.fontColor}
              w={matches ? "100%" : "400px"}
            >
              {footerData?.FooterContent?.description}
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        {matches && (
          <Accordion
            bg={"layoutidark"}
            mt={20}
            className={classes.accControl}
            styles={{
              item: { background: "transpartent", border: "0px" },
              control: { background: "transpartent", border: "0px" },
              label: { color: "#fff" },
              chevron: { color: "#fff", fontSize: "24px" },
            }}
          >
            {groupsCollapce}
          </Accordion>
        )}
      </footer>
      <Divider color={footerData?.FooterColors?.dividerColor} size={"2px"} />

      <div
        className={classes.afterFoot}
        style={{ background: footerData?.FooterColors?.lastColor }}
      >
        <Container size={"xl"} pb={"50px"} pt={matches ? "20px" : "50px"}>
          <Group justify="space-between">
            <Text
              fs={"16px"}
              lh={"24px"}
              fw={100}
              c={footerData.FooterColors.fontColor}
            >
              {Parser(footerData?.FooterContent?.copyWriter)}
            </Text>
            {!matches && (
              <Text
                fs={"16px"}
                lh={"24px"}
                fw={100}
                c={footerData.FooterColors.fontColor}
              >
                {Parser(footerData?.FooterContent?.createdBy)}
              </Text>
            )}
          </Group>
        </Container>
      </div>
    </>
  );
}
