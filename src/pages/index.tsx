import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase';
import { Card } from '@/components/atoms/Card';
import {
  withSidebar,
  WithSidebarProps,
  getStaticProps,
} from '@/containers/withSidebar';

type QueryParams = {
  page?: string;
};

type Props = WithSidebarProps;

// const NUMBER_OF_POST_PER_PAGE = 10;

const IndexPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  const queryParams = router.query as QueryParams;
  const page =
    queryParams.page && queryParams.page.length > 0
      ? parseInt(queryParams.page, 10)
      : 1;

  // const startIndex = NUMBER_OF_POST_PER_PAGE * (page - 1);
  // const postsForDisplay = posts.slice(
  //   startIndex,
  //   startIndex + NUMBER_OF_POST_PER_PAGE
  // );


  interface Post {
    id: string;
    title: string;
    postText: string;
    timestamp: number;
  }
  const [postList, setPostList] = useState<Post[]>([]);

   useEffect(() => {
    const getPosts = async() => {
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      const data = await getDocs(q);
      const fetchedPosts = data.docs.map((doc) => {
        const postData = doc.data();
        const timestamp = postData.timestamp.toDate().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
        return {
          id: doc.id,
          title: postData.title,
          postText: postData.postText,
          timestamp: timestamp,
        } as Post;
      });
      setPostList(fetchedPosts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>

      <div className="flex-1">
        {postList.map((post) => (
          <Card key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <div className="bg-[#3E5060] text-white">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-2 left-2"></div>
                  </div>
                  <div className="px-[70px] py-[40px] max-h-[250px] flex flex-col">
                    <p className="mb-2">{post.timestamp}</p>
                    <h2 className="text-2xl leading-8 font-bold mb-8">{post.title}</h2>
                    <p>{post.postText}</p>
                  </div>
                </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* <div className="mt-10">
        <Pagination
          perPage={NUMBER_OF_POST_PER_PAGE}
          total={posts.length}
          currentPage={page}
        />
      </div> */}
    </div>
  );
};

export { getStaticProps };

export default withSidebar(IndexPage);
