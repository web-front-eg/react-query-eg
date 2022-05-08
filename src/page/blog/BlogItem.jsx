const BlogItem = ({ data, onClick }) => {
  return (
    <li
      onClick={onClick}
      className='py-2 text-lg cursor-pointer hover:text-gray-500 active:text-gray-700'
    >
      {data.title}
    </li>
  );
};

export default BlogItem;
