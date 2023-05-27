import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostCardList } from '@/components/organisms/_PostCardList';
import { Pagination } from '@/components/organisms/Pagination';
import {
  withSidebar,
  WithSidebarProps,
  getStaticProps,
} from '@/containers/withSidebar';

type QueryParams = {
  page?: string;
};

type Props = WithSidebarProps;

const NUMBER_OF_POST_PER_PAGE = 10;

const IndexPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  const queryParams = router.query as QueryParams;
  const page =
    queryParams.page && queryParams.page.length > 0
      ? parseInt(queryParams.page, 10)
      : 1;

  const startIndex = NUMBER_OF_POST_PER_PAGE * (page - 1);
  const postsForDisplay = posts.slice(
    startIndex,
    startIndex + NUMBER_OF_POST_PER_PAGE
  );

  return (
    <div className='text-white text-center p-6'>
      感情分析レポートページ
    </div>
  );
};

export { getStaticProps };

export default IndexPage;
