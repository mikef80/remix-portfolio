import { ReactNode, FC } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='max-w-2xl mx-auto'>{children}</div>;
};

export default Content;
