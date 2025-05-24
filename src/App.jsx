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
import LaunchpadsList from "./Pages/Launchpads/LaunchpadsList/LaunchpadsList";
import CreateTeleAirdrop from "./Pages/TeleAirdrop/CreateTeleAirdrop/CreateTeleAirdrop";
import AirdropBotList from "./Pages/TeleAirdrop/AirdropBotList/AirdropBotList";
import PinkLockTokenMain from "./Pages/PinkLock/PinkLockToken";
import PinkLockCreateMain from "./Pages/PinkLock/PinkLockCreate";
import PinkLockLiquidity from "./components/PinkLock/PinkLockLiquidity/PinkLockLiquidity";
import CreateAirdrop from "./Pages/Airdrops/CreateAirdrop";
import CreateToken from "./Pages/Token/CreateToken";
import TokenBaby from "./Pages/Token/TokenBaby";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
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
          <Route path="/launchpads/LaunchpadsList" element={<LaunchpadsList/>} />

          {/* Tale Airdrop Pages */}
          <Route path="/teleairdrop/CreateTeleAirdrop" element={<CreateTeleAirdrop />} />
          <Route path="/teleairdrop/AirdropBotList" element={<AirdropBotList />} />

          {/* Pink Lock Pages*/}
          <Route path="/pinklock/create" element={<PinkLockCreateMain />} />
          <Route path="/pinklock/token" element={<PinkLockTokenMain />} />
          <Route path="/pinklock/liquidity" element={<PinkLockLiquidity />} />

          {/* Airdrops Pages */}
          <Route path="/airdrops/CreateAirdrop" element={<CreateAirdrop />} />
          {/* <Route path="/airdrops/AirdropList" element={<AirdropList />} /> */}

          {/* Token Pages */}
          <Route path="/token/CreateToken" element={<CreateToken />} />
          <Route path="/token/TokenBaby" element={<TokenBaby />} />

          {/* Leaderboard Page*/}
          <Route path="/LeaderBoard/LeaderBoard" element={<LeaderBoard />} />

          {/* Buy Crypto Page */}
          <Route path="/BuyCryptoFiat/BuyCryptoFiat" element={<BuyCryptoFiat />} />

          {/* Anti Bot Page */}
          <Route path="/AntiBot/AntiBot" element={<AntiBot />} />

          {/* Multi Senter Page */}
          <Route path="/MultiCenter/MultiCenter" element={<MultiCenter />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;