// import BlogContainer from './page/blog/BlogContainer';
// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// https://jforj.tistory.com/243
// https://stackoverflow.com/questions/40967162/what-is-the-meaning-of-this-code-0-function-in-javascript

const GET_dummy = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [key, { hello, page }] = queryKey;
  console.log('hello: ', hello);
  console.log('page: ', page);

  const response = await fetch('https://api.github.com/repos/tannerlinsley/react-query');

  if (!response.ok) {
    throw new Error('404');
  }

  return response.json();
};

const App2 = () => {
  const { isLoading, error, data } = useQuery(['repoData', { hello: 'hellooo', page: 0 }], GET_dummy, {
    // https://react-query.tanstack.com/guides/disabling-queries
    //
    enabled: true,
    // auto-retry on failure!
    // https://react-query.tanstack.com/guides/query-retries
    retry: 3,
    // auto-retry delay (not recommended)
    // https://react-query.tanstack.com/guides/query-retries
    retryDelay: 1000, // 1s
    //  as we query for the other data, we are in need of keeping data somewhere,
    //  because success and loading states transitioned and it leads to the new request -> destroy the last one
    //
    // The data from the last successful fetch available while new data is being requested, even though the query key has changed,
    // and as the new data arrives, the previous data is seamlessly swapped to show the new data.
    // by setting the flag of 'keepPreviousData' to true
    keepPreviousData: true,
    initialData: {
      //
    }
  });

  // useMutation -> performing post/put/patch by react-query
  // https://jforj.tistory.com/244

  // invalidateQueries -> invalidate the query key -> data goes stale so that the query fetches again

  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);
  // console.log('error: ', error);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  // if (!data) return null;

  const { name, description, subscibers_count, stargazers_count, forks_count } = data;

  return (
    <div className='px-3 py-2 h-screen w-screen'>
      <h1>{name}</h1>
      <p>{description}</p>
      <strong>{subscibers_count}</strong>&nbsp;
      <strong>{stargazers_count}</strong>&nbsp;
      <strong>{forks_count}</strong>
    </div>
  );
};

export default App2;
