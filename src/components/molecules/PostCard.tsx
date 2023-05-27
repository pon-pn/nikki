import { VFC } from 'react';
import Link from 'next/link';
import { Card } from '@/components/atoms/Card';
import { formatDateToHumanReadable } from '@/utils/day.util';
import type { Post } from '@/types/Post';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card>
      <Link href={`/posts/${post.id}`}>
        <div className="bg-[#3E5060] text-white">
          <div className="relative overflow-hidden">
            <div className="absolute top-2 left-2">
            </div>
          </div>
          <div className="px-[70px] py-[40px] max-h-[250px] flex flex-col">
            <p className='mb-2'>{formatDateToHumanReadable(post.publishedAt)}</p>
            <h2 className="text-2xl leading-8 font-bold mb-8">
              {post.title}
            </h2>
            <p>
              {post.body.slice(0, 100)}{post.body.length > 30 ? "..." : ""}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
