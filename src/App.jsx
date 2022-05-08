// import BlogContainer from './page/blog/BlogContainer';
import { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';

// https://stackoverflow.com/questions/40967162/what-is-the-meaning-of-this-code-0-function-in-javascript

const GET_dummy = async () => {
  // const GET_dummy = async ({ queryKey }) => {
  // if (queryKey) {
  //   // eslint-disable-next-line no-unused-vars
  //   const [key, { hello }] = queryKey;
  //   console.log(hello);
  // }

  const response = await fetch('https://api.github.com/repos/tannerlinsley/react-query');

  if (!response.ok) {
    throw new Error('404');
  }

  return response.json();
};

const App = () => {
  // const { isLoading, error, data } = useQuery(
  //   ['repoData', { hello: 'fuck you' }],
  //   GET_dummy
  // );

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const _data = await GET_dummy();
        if (_data) {
          setData(_data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);
  // console.log('error: ', error);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (!data) return null;

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

export default App;
