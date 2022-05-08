// page
import Layout from '../layout/Layout';
import BlogList from './BlogList';
import BlogItemDetail from './BlogItemDetail';

// style
import BlogTitle from './BlogTitle';

// state
// import { PagePositionContextProvider } from '../../context/PagePosition.context';
import { SelectPostContextProvider } from '../../context/SelectedPost.context';

const BlogContainer = () => {
  return (
    <div>
      <BlogTitle />

      <SelectPostContextProvider>
        <Layout>
          <BlogList />
        </Layout>

        {<BlogItemDetail />}
      </SelectPostContextProvider>
    </div>
  );
};

export default BlogContainer;
