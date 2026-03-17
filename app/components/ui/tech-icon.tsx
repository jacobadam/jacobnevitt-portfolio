import Image from "next/image";

type TechIconProps = {
  name: string;
  iconPath: string;
};

export function TechIcon({ name, iconPath }: TechIconProps) {
  return (
    <li className="flex flex-row items-center gap-2">
      <Image
        className="group transition-all duration-500 hover:-translate-y-2"
        src={iconPath}
        alt=""
        width={30}
        height={30}
      ></Image>
      <span className="text-secondary-foreground font-semibold">{name}</span>
    </li>
  );
}
