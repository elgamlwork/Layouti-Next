import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import { HeaderMenu } from "../../components/global/Header/HeaderMenu";
import { FooterLinks } from "../../components/global/Footer/FooterLinks";
import "../../Styles/Global/globalstyles.css";
import StoreProvider from "../StoreProvider";

async function getFooter() {
  const res = await fetch(`${process.env.APP_URL}/footer`);
  return res.json();
}
async function getHeader() {
  const res = await fetch(`${process.env.APP_URL}/navbar`);
  return res.json();
}

export const metadata = {
  title: "Layouti",
  description: "I am using Mantine with Next.js!",
};

const links = [
  { link: "/services", label: "Services" },
  {
    link: "/works",
    label: "Works",
  },
  { link: "/aboutus", label: "About" },
  { link: "/pricing", label: "Products" },
  {
    link: "#2",
    label: "Links",
  },
];

export default async function RootLayout({ children }: { children: any }) {
  const footerData = await getFooter();
  const headerData = await getHeader();

  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href={headerData?.data?.favIcon} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;1000&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <HeaderMenu navData={headerData?.data} links={links} />
            {children}
            <FooterLinks footerData={footerData?.data} />
          </MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
