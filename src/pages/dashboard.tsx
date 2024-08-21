import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
  }, [router]);

  return <div></div>;
};

export default Dashboard;
