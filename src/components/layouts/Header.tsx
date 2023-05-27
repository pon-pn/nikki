import { VFC } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

export const Header: VFC = () => {
  
  return (
    <Popover className="relative backdrop-blur shadow z-10 text-white border-b">
      <div className="flex justify-between items-center px-4 xl:px-0 py-4 md:py-6 md:max-w-7xl md:mx-auto">
        <div>
          <Link href="/">
          Emo Nikki
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className='mr-[60px]'>
            <Link href="/report">
            感情を見る
            </Link>
          </div>
          <div>
            <Link href="/post">
            <span className='bg-white text-slate-700 py-3 px-5 rounded-[4px]'>投稿する</span>
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
};
