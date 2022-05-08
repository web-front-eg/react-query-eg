//#region imports
// page
import Layout from '../layout/Layout';
import BlogList from './list/BlogList';
import BlogItemDetail from './item/BlogItemDetail';

// style
import BlogTitle from './list/BlogTitle';

// state
import { SelectPostContextProvider } from '../../state/client/context/SelectedPost.context';
import { CommentsContextProvider } from '../../state/client/context/Comments.context';
//#endregion imports

const BlogContainer = () => (
  <>
    <BlogTitle />

    <SelectPostContextProvider>
      <Layout>
        <BlogList />
      </Layout>

      <CommentsContextProvider>
        <BlogItemDetail />
      </CommentsContextProvider>
    </SelectPostContextProvider>
  </>
);

export default BlogContainer;
