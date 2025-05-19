import React from 'react';
import DashboardHero from '../../components/Dashboard/DashboardHero/DashboardHero';
import SupportedChains from '../../components/Dashboard/SupportedChains/SupportedChains';
import DashboardTools from '../../components/Dashboard/DashboardTools/DashboardTools';

const Dashboard = () => {
  return (
    <>

    <DashboardHero/>
    <SupportedChains/>
    <DashboardTools/>
      
    </>
  )
}

export default Dashboard;