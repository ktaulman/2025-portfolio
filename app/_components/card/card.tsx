import { ReactNode } from "react";
import Image from "next/image";

type Children = {
  children: ReactNode;
};

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type CardLinkProps = Children & {
  href: string;
};
function Card({ children }: Children) {
  return (
    <article className=" flex flex-col flex-1 min-h-52  ">{children}</article>
  );
}
function CardImage({ src, alt, width, height }: Image) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg max-w-[${width}px] min-w-[${width}px max-h-[${height}px] min-h-[${height}px`}
    />
  );
}
function Title({ children }: Children) {
  return (
    <h2 className="text-white text-base font-medium leading-normal mt-4">
      {children}
    </h2>
  );
}
function Summary({ children }: Children) {
  return (
    <p className="text-white text-sm font-medium leading-normal">{children}</p>
  );
}
function Description({ children }: Children) {
  return (
    <p className="text-[#9daab8] text-xs font-normal leading-normal grow">
      {children}
    </p>
  );
}
function CardLink({ children, href }: CardLinkProps) {
  return (
    <a className="text-xs text-indigo-800 " href={href}>
      {children}
    </a>
  );
}
Card.Title = Title;
Card.Image = CardImage;
Card.Summary = Summary;
Card.Description = Description;
Card.Link = CardLink;

export default Card;
