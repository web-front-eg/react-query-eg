//#region imports
// page
import Layout from '../layout/Layout';
import BlogList from './list/BlogList';
import BlogItemDetail from './item/BlogItemDetail';

// style
import BlogTitle from './list/BlogTitle';

// state
import { useSelectedPostCtx } from '../../state/client/context/SelectedPost.context';
import { useDeletePostMutate } from '../../state/network/mutate/useDeletePostMutate';
import { useUpdatePostTitleMutate } from '../../state/network/mutate/useUpdatePostTitleMutate';
// import { usePagePositionCtx } from '../../state/client/context/PagePosition.context';
//#endregion imports

const BlogContainer = () => {
  const { selectedPost } = useSelectedPostCtx();
  const deletePostMutate = useDeletePostMutate();
  const updatePostTitleMutate = useUpdatePostTitleMutate();
  // const { pagePos } = usePagePositionCtx();

  return (
    <>
      <BlogTitle />

      <Layout>
        <BlogList />
      </Layout>

      {selectedPost && (
        <BlogItemDetail
          selectedPost={selectedPost}
          deletePostMutate={deletePostMutate}
          updatePostTitleMutate={updatePostTitleMutate}
        />
      )}
    </>
  );
};

export default BlogContainer;
