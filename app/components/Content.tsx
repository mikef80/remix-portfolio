import { ReactNode, FC } from "react";

interface ContentProps {
  children: ReactNode;
  extraClasses?: string;
  [key: string]: any;
}

const Content: FC<ContentProps> = ({ children, ...rest }) => {
  const { extraClasses } = rest;

  return <div className={`max-w-5xl mx-auto ${extraClasses}`}>{children}</div>;
};

export default Content;
