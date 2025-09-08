import { ReactNode } from "react";
interface IProps {
  link: string;
  icon: ReactNode;
}

const SocialLinkIcon = ({ link, icon }: IProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"

      className="flex justify-center items-center rounded-xl bg-dark-blue w-10 h-10"
    >
      {icon}
    </a>
  );
};

export default SocialLinkIcon;
