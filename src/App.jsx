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
import CreateTeleAirdrop from "./Pages/TeleAirdrop/CreateTeleAirdrop/CreateTeleAirdrop";
import AirdropBotList from "./Pages/TeleAirdrop/AirdropBotList/AirdropBotList";
import PinkLockTokenMain from "./Pages/PinkLock/PinkLockToken";
import PinkLockCreateMain from "./Pages/PinkLock/PinkLockCreate";
import CreateAirdrop from "./Pages/Airdrops/CreateAirdrop";
import BuyCryptoFiat from "./Pages/BuyCryptoFiat/BuyCryptoFiat";
import AntiBot from "./Pages/AntiBot/AntiBot";
import MultiCenter from "./Pages/MultiCenter/MultiCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* This makes Dashboard the default child route of Layout */}
          <Route index element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* Launchpads Pages */}
          <Route path="/launchpads/CreatePresale" element={<CreatePresale />} />
          <Route path="/launchpads/CreateFairlaunch" element={<CreateFairlaunch />} />
          <Route path="/launchpads/CreateSubscription" element={<CreateSubscription />} />
          <Route path="/launchpads/CreateSocialSale" element={<CreateSocialSale />} />
          <Route path="/launchpads/XOverFlowPresale" element={<XOverFlowPresale />} />
          <Route path="/launchpads/XOverflowFairlaunch" element={<XOverflowFairlaunch />} />

          {/* Tale Airdrop */}
          <Route path="/teleAirdrop/CreateTeleAirdrop" element={<CreateTeleAirdrop />} />
          <Route path="/teleAirdrop/AirdropBotList" element={<AirdropBotList />} />

          {/* Pink Lock */}
          <Route path="/pinklock/create" element={<PinkLockCreateMain />} />
          <Route path="/pinklock/token" element={<PinkLockTokenMain />} />

          {/* Airdrops Pages */}
          
          <Route path="/Airdrops/CreateAirdrop" element={<CreateAirdrop />} />

                    {/* BuyCryptoFiat */}

          <Route path="/BuyCryptoFiat/BuyCryptoFiat" element={<BuyCryptoFiat />} />

          {/* AntiBot */}

          <Route path="/AntiBot/AntiBot" element={<AntiBot />} />

          {/* MultiCenter */}

          <Route path="/MultiCenter/MultiCenter" element={<MultiCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;