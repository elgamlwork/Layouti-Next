"use client";

import { MantineColorsTuple, createTheme } from "@mantine/core";

const layoutigreen: MantineColorsTuple = [
  "#9ADB97",
  "#87D984",
  "#75D971",
  "#62DA5D",
  "#4EDD49",
  "#3BE134",
  "#26E71E",
  "#27D620",
  "#2BC225",
  "#2EB128",
  "#30A12B",
  "#31932D",
  "#31862E",
];

const layoutidark: MantineColorsTuple = [
  "#0D1D36",
  "#0B1B34",
  "#081933",
  "#061732",
  "#041531",
  "#021430",
  "#00122F",
  "#02112A",
  "#031126",
  "#041023",
  "#050F1F",
  "#060F1D",
  "#060E1A",
];

export const theme = createTheme({
  colors: {
    layoutigreen,
    layoutidark,
  },
  fontFamily: "Cairo",
});
