import BlogContainer from './page/blog/BlogContainer';
import { SelectPostContextProvider } from './state/client/context/SelectedPost.context';

const Root = () => (
  <div>
    <SelectPostContextProvider>
      <BlogContainer />
    </SelectPostContextProvider>
  </div>
);

export default Root;
