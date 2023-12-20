"use client";
import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Button,
  rem,
  Image,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import BtnClasses from "../../../Styles/Global/Buttons.module.css";
import { usePathname, useRouter } from "next/navigation";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

export function HeaderMenu({ navData, links }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window?.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const items = links.map((link: any) => {
    const menuItems = link.links?.map((item: any) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        data-green={router == link.link ? true : undefined}
        data-white={prevScrollPos > 0 ? true : undefined}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header
      className={classes.header}
      data-active={scrollingDown && prevScrollPos > 0 ? true : undefined}
      data-white={prevScrollPos > 0 ? true : undefined}
    >
      <Container size="xl">
        <div className={classes.inner}>
          <Link href="/">
            <Image
              src={prevScrollPos > 0 ? navData?.darkImage : navData?.lightImage}
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
            <Group gap={20} visibleFrom="sm">
              {items}
              <Button
                className={BtnClasses.ghostButton}
                fs="14px"
                color="layoutigreen"
                c={prevScrollPos > 0 ? "layoutidark" : "white"}
                fw="700"
                px={rem("32px")}
                radius="50px"
                variant="outline"
              >
                Subscribe
              </Button>
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              color={prevScrollPos > 0 ? "#000" : "#fff"}
            />
          </Group>
        </div>
      </Container>
      <DrawerMenu logo={navData?.lightImage} />
    </header>
  );
}
