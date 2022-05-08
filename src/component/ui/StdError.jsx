const StdError = ({ error }) => (
  <>
    <h3>Error Occurred!</h3>
    <p>{error.ToString()}</p>
  </>
);

export default StdError;
