import { VFC } from 'react';
import Link from 'next/link';
import { Card } from '@/components/atoms/Card';
import type { Post } from '@/types/Post';

interface PostCardProps {
  post: Post;
}

const PostCard: VFC<PostCardProps> = ({ post }) => {
  const { id, publishedAt, title, body } = post;

  return (
    <Card>
      <Link href={`/posts/${id}`}>
        <div className="bg-[#3E5060] text-white">
          <div className="relative overflow-hidden">
            <div className="absolute top-2 left-2"></div>
          </div>
          <div className="px-[70px] py-[40px] max-h-[250px] flex flex-col">
            <p className="mb-2">{post.body}</p>
            <h2 className="text-2xl leading-8 font-bold mb-8">{post.title}</h2>
            <p>{body.slice(0, 100)}{body.length > 30 ? "..." : ""}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

interface PostCardListProps {
  postList: Post[];
}

const PostCardList: VFC<PostCardListProps> = ({ postList }) => {
  return (
    <>
      {postList.map((post) => (
        <PostCard post={post} />
      ))}
    </>
  );
};

export { PostCard, PostCardList };
