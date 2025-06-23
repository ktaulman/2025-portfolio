// "use client";
import Card from "@/app/_components/card/card";
// import { useScreenWidthStore } from "@/app/_providers/screen-width-provider";

type Image = {
  imageSrc: string;
  alt: string;
};

export default function ProjectListingOptimizedImage({ imageSrc, alt }: Image) {
  // const { screenWidth } = useScreenWidthStore();
  // const isNotMobilePhoneScreen = screenWidth > 650;
  // const width = isNotMobilePhoneScreen ? 400 : 300;
  // const height = isNotMobilePhoneScreen ? 300 : 200

  return <Card.Image src={imageSrc} alt={alt} width={300} height={250} />;
}
