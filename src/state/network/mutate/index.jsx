export const MutateHandler = ({ mutator, additionalStyle = '' }) => {
  if (!mutator) {
    return null;
  }

  const { isError, isLoading, isSuccess } = mutator;

  return (
    <div className={'' + additionalStyle}>
      {isError && <p className='text-red-500'>Error from Delete!</p>}
      {isLoading && <p className='text-purple-500'>Loading for Deletion!</p>}
      {isSuccess && <p className='text-green-500'>Deleting Post was successful!</p>}
    </div>
  );
};
