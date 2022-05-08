import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000)
    }
  }
});

const WrapReactQueryClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialiIsOpen={false} />
    </QueryClientProvider>
  );
};

WrapReactQueryClientProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default WrapReactQueryClientProvider;
