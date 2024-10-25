"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";


import Tag from '@/components/data-display/tag';
// import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

const iconSlugs = [
  "python",
  "java",
  "c",
  "cplusplus",
  "sql",
  "docker",
  "kubernetes",
  "microsoftexcel",
  "javascript",
  "r",
  "php",
  "html5",
  "css3",
  "react",
  "tailwindcss",
  "angularjs",
  "bootstrap",
  "nodedotjs",
  "nextdotjs",
  "express",
  "pandas",
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "matplotlib",
  "mysql",
  "mongodb",
  "amazonwebservices",
  "googlecloud",
  "microsoftazure",
  "git",
  "powerbi",
  "adobephotoshop",
  "microsotoffice",
  "vercel",
  "github",
  "visualstudiocode",

];

const IconCloudClient = () => {
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons as Record<string, SimpleIcon>).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    <div className="h-[400px] lg:h-[500px]">
      <Cloud {...cloudProps}>
        {renderedIcons && renderedIcons}
      </Cloud>
    </div>
  );
};

export default IconCloudClient;
