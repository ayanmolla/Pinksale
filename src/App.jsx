import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './i18n';
import Layout from "./components/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatePresale from "./Pages/Launchpads/CreatePresale/CreatePresale";
import CreateFairlaunch from "./Pages/Launchpads/CreateFairlaunch/CreateFairlaunch";
import CreateSubscription from "./Pages/Launchpads/CreateSubscription/CreateSubscription";
import CreateSocialSale from "./Pages/Launchpads/CreateSocialSale/CreateSocialSale";
import XOverFlowPresale from "./Pages/Launchpads/XOverFlowPresale/XOverFlowPresale";
import XOverflowFairlaunch from "./Pages/Launchpads/𝕏OverflowFairlaunch/𝕏OverflowFairlaunch";
import PinkLockTokenMain from "./Pages/PinkLock/PinkLockToken";
import PinkLockCreateMain from "./Pages/PinkLock/PinkLockCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* This makes Dashboard the default child route of Layout */}
          <Route index element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* Launchpads Pages */}
          <Route path="/Launchpads/CreatePresale" element={<CreatePresale />} />
          <Route path="/Launchpads/CreateFairlaunch" element={<CreateFairlaunch />} />
          <Route path="/Launchpads/CreateSubscription" element={<CreateSubscription />} />
          <Route path="/Launchpads/CreateSocialSale" element={<CreateSocialSale />} />
          <Route path="/Launchpads/XOverFlowPresale" element={<XOverFlowPresale />} />
          <Route path="/Launchpads/XOverflowFairlaunch" element={<XOverflowFairlaunch />} />


          {/* PinkMeme Pages */}
          {/* <Route path="/PinkMeme/CreateToken" element={<CreateToken />} /> */}
          {/* <Route path="/PinkMeme/CreateList" element={<CreateList />} /> */}
          <Route path="/pinklock/create" element={<PinkLockCreateMain />} />
          <Route path="/pinklock/token" element={<PinkLockTokenMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;