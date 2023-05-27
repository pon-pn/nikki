import { VFC } from 'react';
import { formatDateToHumanReadable } from '@/utils/day.util';
import type { Profile } from '@/types/Profile';
import type { Post } from '@/types/Post';

type Props = {
  articleData: Profile | Post;
};

export const Article: VFC<Props> = ({ articleData }) => {
  return (
    <article className="prose max-w-[620px] m-auto bg-[#3E5060] text-white mb-[30px] rounded-[12px] border border-[#66B2FF]">
      <div className='px-[70px] py-[40px] w-full overflow-hidden'>
        <p className='mb-2'>{formatDateToHumanReadable(articleData.publishedAt)}</p>
        <h2 className="text-2xl leading-8 font-bold mb-8">
          {articleData.title}
        </h2>
      <div dangerouslySetInnerHTML={{ __html: articleData.body }}></div>
      </div>
    </article>
  );
};
