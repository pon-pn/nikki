import { VFC } from 'react';
import type { Category, Archive } from '@/types/Post';

type Props = {
  categories: Category[];
  archives: Archive[];
};

export const Sidebar: VFC<Props> = ({ categories, archives }) => {
  return (
    <div className='text-white'>
      カレンダーが入ります
    </div>
  );
};
