import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const CALC_RETRY_DELAY = attempt => Math.min(1000 * 2 ** attempt, 30000);
const defaultOptions = {
  queries: { retryDelay: CALC_RETRY_DELAY }
};

const queryClient = new QueryClient({ defaultOptions });

const WrapReactQueryClientProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialiIsOpen={false} />
  </QueryClientProvider>
);

WrapReactQueryClientProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default WrapReactQueryClientProvider;
