import { ReactNode, FC } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='max-w-4xl mx-auto'>{children}</div>;
};

export default Content;
