// Home component representing the homepage
const Home = () => {
  return (
    <>
      {/* Container for the homepage content, centered vertically and horizontally */}
      <div className='flex items-center justify-center h-screen overflow-hidden'>
        {/* Container for the image */}
        <div className='w-3/6 h-11/12 mt-0 p-0'>
          {/* Image element */}
          <img src='/src/assets/images/homepage1.jpg' alt='homepageImage' />
        </div>
      </div>
    </>
  );
};

export default Home;
