import { ReactNode, FC } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='p-6 text-justify'>{children}</div>;
};

export default Content;
