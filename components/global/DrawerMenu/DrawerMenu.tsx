import React from "react";
import classes from "./DrawerMenu.module.css";
import {
  Burger,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
type Props = any;

const data: any = [
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

const DrawerMenu = ({ logo }: Props) => {
  const path = usePathname();
  const router = useRouter();

  const maingroups = data[0].links.map((link: any, index: any) => (
    <Text<"a">
      key={index}
      className={classes.link}
      component={"a"}
      href={link.link}
      onClick={(event) => (event.preventDefault(), router.push(link.link))}
      c={"white"}
      size={rem("28px")}
      fw={700}
      lh={"45px"}
      data-green={path == link.link ? true : undefined}
    >
      {link.label}
    </Text>
  ));

  return (
    <Drawer
      position="right"
      size="100%"
      classNames={classes}
      opened={false}
      onClose={() => {}}
      styles={{
        content: {
          background: "#333",
        },
      }}
    >
      <header className={classes.headerTop}>
        <Container size="xl">
          <div className={classes.innerTop}>
            <Link href="/">
              <Image
                src={logo}
                height="45"
                fit="contain"
                styles={{
                  root: {
                    objectPosition: "left",
                  },
                }}
                alt="Logo"
              />
            </Link>
            <Group gap={30}>
              <Burger
                // opened={opened}
                // onClick={toggle}
                size="md"
                color={"#fff"}
              />
            </Group>
          </div>
        </Container>
      </header>

      <Container size={"xl"}>
        <SimpleGrid cols={4} spacing={60}>
          <Flex direction={"column"} gap={10}>
            {maingroups}
          </Flex>
        </SimpleGrid>
      </Container>
    </Drawer>
  );
};

export default DrawerMenu;
