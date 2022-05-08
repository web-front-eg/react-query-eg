import useQuery from 'react-query';

// page
import Layout from '../layout/Layout';
import BlogList from './BlogList';
import BlogItemDetail from './BlogItemDetail';

// style
import BlogTitle from './BlogTitle';

// state
import { PagePositionContextProvider } from '../../context/PagePosition.context';
import {
  SelectPostContextProvider,
  useGetSelectedPost
} from '../../context/SelectedPost.context';

const BlogContainer = () => {
  const selectedPost = useGetSelectedPost();

  return (
    <PagePositionContextProvider>
      <SelectPostContextProvider>
        <div>
          <BlogTitle />
          <Layout>
            <BlogList />
          </Layout>
          {selectedPost && <BlogItemDetail selectedPost={selectedPost} />}
        </div>
      </SelectPostContextProvider>
    </PagePositionContextProvider>
  );
};

export default BlogContainer;
