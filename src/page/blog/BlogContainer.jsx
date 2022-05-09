//#region imports
// page
import Layout from '../layout/Layout';
import BlogList from './list/BlogList';
import BlogItemDetail from './item/BlogItemDetail';

// style
import BlogTitle from './list/BlogTitle';

// state
import { useSelectedPostCtx } from '../../state/client/context/SelectedPost.context';
import { usePostsQuery } from '../../state/network/usePostsQuery';
import { useCommentsQuery } from '../../state/network/useCommentsQuery';
//#endregion imports

const BlogContainer = () => {
  const { selectedPost } = useSelectedPostCtx();
  const { onClick_updateTitle, onClick_deletePost } = usePostsQuery();
  const { comments } = useCommentsQuery(selectedPost?.id);

  const itemDetailJSX = selectedPost && (
    <BlogItemDetail
      selectedPost={selectedPost}
      onClick_deletePost={onClick_deletePost}
      onClick_updateTitle={onClick_updateTitle}
      comments={comments}
    />
  );

  return (
    <>
      <BlogTitle />

      <Layout>
        <BlogList />
      </Layout>

      {itemDetailJSX}
    </>
  );
};

export default BlogContainer;
