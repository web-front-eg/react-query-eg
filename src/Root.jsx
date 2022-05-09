import BlogContainer from './page/blog/BlogContainer';
import { SelectPostContextProvider } from './state/client/context/SelectedPost.context';

const Root = () => (
  <>
    <SelectPostContextProvider>
      <BlogContainer />
    </SelectPostContextProvider>
  </>
);

export default Root;
