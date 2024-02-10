import Notes from './Notes';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Simple Notes</h1>
      <p className='mb-4'>Login to continue</p>
      <Notes />
    </div>
  );
};

export default Dashboard;
