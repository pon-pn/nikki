import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-[620px] m-auto border border-[#66B2FF] box-border shadow-md mb-10 rounded-[12px] overflow-hidden">
      {children}
    </div>
  );
};
