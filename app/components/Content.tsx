import { ReactNode, FC } from 'react';

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-3 text-justify">{children}</div>;
};

export default Content;
