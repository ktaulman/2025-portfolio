import Image from "next/image";

export default function AvatarIcon() {
  return (
    <Image
      src="/images/linkedin.jpg"
      alt="nav bar avatar icon"
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full "
      width={30}
      height={30}
    />
  );
}
