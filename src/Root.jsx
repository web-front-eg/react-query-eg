import BlogContainer from './page/blog/BlogContainer';
import { PagePositionContextProvider } from './state/client/context/PagePosition.context';
import { SelectPostContextProvider } from './state/client/context/SelectedPost.context';

const Root = () => (
  <>
    <PagePositionContextProvider>
      <SelectPostContextProvider>
        <BlogContainer />
      </SelectPostContextProvider>
    </PagePositionContextProvider>
  </>
);

export default Root;
