import React, { useEffect } from 'react';
import Head from '../components/head.js';
import ACMEHome from '../projects/acme-sports/acmeHome';

const ACMESportsPage = () => {
  useEffect(() => {
    document.body.className = 'acme-sports-page';
    return () => {
      document.body.className = ''; // Reset the class when the component unmounts
    };
  }, []);

  return (
    <div>
      <Head title="ACME-Sports-App"/>
      <ACMEHome />
    </div>
  );
};

export default ACMESportsPage;