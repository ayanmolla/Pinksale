import React from 'react';
import DashboardHero from '../../components/Dashboard/DashboardHero/DashboardHero';
import DashboardSlider from '../../components/Dashboard/DashboardSlider/DashboardSlider';
import DashboardTable from '../../components/Dashboard/DashboardTable/DashboardTable';
import DashboardTools from '../../components/Dashboard/DashboardTools/DashboardTools';
import Footer from '../../components/Layout/Footer';

const Dashboard = () => {
  return (
    <>

    <DashboardHero/>
    <DashboardSlider/>
    <DashboardTable/>
    <DashboardTools/>
    <Footer/>
      
    </>
  )
}

export default Dashboard;