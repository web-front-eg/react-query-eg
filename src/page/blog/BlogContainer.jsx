//#region imports
// page
import Layout from '../layout/Layout';
import BlogList from './list/BlogList';
import BlogItemDetail from './item/BlogItemDetail';

// style
import BlogTitle from './list/BlogTitle';

// state
import { useSelectedPostCtx } from '../../state/client/context/SelectedPost.context';
// import { usePostsQuery } from '../../state/network/usePostsQuery';
// import { usePagePositionCtx } from '../../state/client/context/PagePosition.context';
//#endregion imports

const BlogContainer = () => {
  const { selectedPost } = useSelectedPostCtx();
  // const { pagePos } = usePagePositionCtx();
  // const { onClick_updateTitle, onClick_deletePost } = usePostsQuery(pagePos);

  return (
    <>
      <BlogTitle />

      <Layout>
        <BlogList />
      </Layout>

      {selectedPost && (
        <BlogItemDetail
          selectedPost={selectedPost}
          // onClick_deletePost={onClick_deletePost}
          // onClick_updateTitle={onClick_updateTitle}
        />
      )}
    </>
  );
};

export default BlogContainer;
