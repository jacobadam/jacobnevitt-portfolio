import Image from "next/image";

type TechIconProps = {
  name: string;
  iconPath: string;
};

export function TechIcon({ name, iconPath }: TechIconProps) {
  return (
    <li className="flex flex-row items-center gap-2">
      <Image src={iconPath} alt="" width={30} height={30}></Image>
      <span className="font-semibold">{name}</span>
    </li>
  );
}
