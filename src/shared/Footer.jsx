// Footer component representing the footer section of the website
const Footer = () => {
  return (
    // Footer container with background color, border, padding, and sticky positioning at the bottom
    <footer className='bg-gray-100 border-t border-gray-300 py-4 sticky bottom-0'>
      <div className='container mx-auto flex justify-center items-center'>
        {/* Text content indicating the creator */}
        <p className='text-base text-gray-600'>
          Made with <span className='text-red-500 text-base'>&hearts;</span> by
          Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
