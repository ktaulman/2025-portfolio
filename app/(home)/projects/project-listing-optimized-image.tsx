"use client";
import Card from "@/app/_components/card/card";
import { useScreenWidthStore } from "@/app/_providers/screen-width-provider";

type Image = {
  imageSrc: string;
  alt: string;
};

export default function ProjectListingOptimizedImage({ imageSrc, alt }: Image) {
  const { screenWidth } = useScreenWidthStore();
  const isNotMobilePhoneScreen = screenWidth > 650;
  const width = isNotMobilePhoneScreen ? 500 : 350;
  const height = isNotMobilePhoneScreen ? 550 : 300;
  const src = isNotMobilePhoneScreen
    ? imageSrc
    : imageSrc.replace(".png", "-sm.png");

  return <Card.Image src={src} alt={alt} width={width} height={height} />;
}
