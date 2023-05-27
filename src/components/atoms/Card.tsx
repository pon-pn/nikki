import { FC } from 'react';

export const Card: FC = ({ children }) => {
  return (
    <div className="max-w-[620px] m-auto border border-[#66B2FF] box-border shadow-md mb-10 rounded-[12px] overflow-hidden">
      {children}
    </div>
  );
};
