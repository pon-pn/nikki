import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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
      投稿ページ
    </div>
  );
};

export { getStaticProps };

export default IndexPage;
