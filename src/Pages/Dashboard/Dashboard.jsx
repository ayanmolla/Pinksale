import React from 'react';
import DashboardHero from '../../components/Dashboard/DashboardHero/DashboardHero';
import DashboardSlider from '../../components/Dashboard/DashboardSlider/DashboardSlider';
import DashboardTable from '../../components/Dashboard/DashboardTable/DashboardTable';
import DashboardTools from '../../components/Dashboard/DashboardTools/DashboardTools';

const Dashboard = () => {
  return (
    <>

    <DashboardHero/>
    <DashboardSlider/>
    <DashboardTable/>
    <DashboardTools/>
      
    </>
  )
}

export default Dashboard;