import Image from "next/image";

type TechIconProps = {
  name: string;
  iconPath: string;
  alt: string;
};

export function TechIcon({ name, iconPath, alt }: TechIconProps) {
  return (
    <li className="flex flex-row justify-center items-center gap-2">
      <Image src={iconPath} alt={alt} width={30} height={30}></Image>
      <span>{name}</span>
    </li>
  );
}
