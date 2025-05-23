import { AiOutlineAlert, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCloudDrizzle } from "react-icons/bs";
import { GiHarryPotterSkull } from "react-icons/gi";
import { GoPlusCircle } from "react-icons/go";
import { HiCash, HiOutlineDocumentText} from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { LiaFacebookSquare } from "react-icons/lia";
import { LuBot, LuChartLine } from "react-icons/lu";
import { MdOutlineLeaderboard, MdOutlineLock } from "react-icons/md";
import { PiPaperPlaneRight, PiParachute, PiSealCheck, PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const SidebarArray = (t) => [
  {
    id: "launchpads", 
    label: t("launchpads"), 
    link: "/launchpads", 
    icon: IoRocketOutline, 
    hasChildren: true, 
    children: [
      { id: "create-presale", label: t("Create Presale"), link: "/launchpads/CreatePresale" },
      { id: "create-fairlaunch", label: t("Create Fairlaunch"), link: "/launchpads/CreateFairlaunch" },
      { id: "create-subscription", label: t("Create Subscription"), link: "/launchpads/CreateSubscription" },
      { id: "create-social-sale", label: t("Create Social Sale"), link: "/launchpads/CreateSocialSale" },
      { id: "overflow-presale", label: t("Overflow Presale"), link: "/launchpads/XOverFlowPresale" },
      { id: "overflow-fairlaunch", label: t("Overflow Fairlaunch"), link: "/launchpads/XOverflowFairlaunch" },
      { id: "launchpad-list", label: t("Launchpad List"), link: "/launchpads/list" }
    ]
  },
  { 
    id: "pinkmeme", 
    label: t("pinkmeme"), 
    link: "/pinkmeme", 
    icon: GiHarryPotterSkull, 
    hasChildren: true, 
    children: [
      { id: "create-token", label: t("Create Token"), link: "/pinkmeme/create-token" },
      { id: "token-list", label: t("Token List"), link: "/pinkmeme/token-list" }
    ]
  },
  { 
    id: "teleairdrop", 
    label: t("teleairdrop"), 
    link: "/teleairdrop", 
    icon: BsCloudDrizzle, 
    hasChildren: true, 
    children: [
      { id: "create-tele-airdrop", label: t("Create Tele Airdrop"), link: "/teleairdrop/CreateTeleAirdrop",},
      { id: "airdrop-bot-list", label: t("Airdrop Bot List"), link: "/teleairdrop/AirdropBotList" }
    ]
  },
  { 
    id: "pinklock", 
    label: t("pinklock"), 
    link: "/pinklock", 
    icon: MdOutlineLock, 
    hasChildren: true, 
    children: [
      { id: "create", label: t("Create"), link: "/pinklock/create" },
      { id: "token", label: t("Token"), link: "/pinklock/token" },
      { id: "liquidity", label: t("Liquidity"), link: "/pinklock/liquidity" }
    ]
  },
  { 
    id: "airdrops", 
    label: t("airdrops"), 
    link: "/airdrops", 
    icon: PiParachute, 
    hasChildren: true, 
    children: [
      { id: "create-airdrop", label: t("Create Airdrop"), link: "/airdrops/CreateAirdrop" },
      { id: "airdrop-list", label: t("Airdrop List"), link: "/airdrops/list" }
    ]
  },
  { 
    id: "token", 
    label: t("token"), 
    link: "/token", 
    icon: GoPlusCircle, 
    hasChildren: true, 
    children: [
      { id: "create-token", label: t("Create Token"), link: "/token/CreateToken" },
      { id: "baby-token", label: t("Baby Token"), link: "/token/baby" }
    ]
  },
  { id: "support", label: t("support"), link: "/support", icon: PiTelegramLogo, hasChildren: false, children: [] },
  { id: "leaderboards", label: t("leaderboards"), link: "/LeaderBoard/LeaderBoard", icon: MdOutlineLeaderboard, hasChildren: false, children: [] },
  { id: "buy-crypto", label: t("buy-crypto"), link: "/BuyCryptoFiat/BuyCryptoFiat", icon: HiCash, hasChildren: false, children: [] },
  { id: "anti-bot", label: t("anti-bot"), link: "/AntiBot/AntiBot", icon: LuBot, hasChildren: false, children: [] },
  { id: "multi-sender", label: t("multi-sender"), link: "/MultiCenter/MultiCenter", icon: PiPaperPlaneRight, hasChildren: false, children: [] },
  { id: "dexview", label: t("dexview"), link: "/dexview", icon: LuChartLine, hasChildren: false, children: [] },
  { id: "pools-alert", label: t("pools-alert"), link: "/pools-alert", icon: AiOutlineAlert, hasChildren: false, children: [] },
  { id: "kyc", label: t("kyc"), link: "/kyc", icon: PiSealCheck, hasChildren: false, children: [] },
  { id: "docs", label: t("docs"), link: "/docs", icon: HiOutlineDocumentText, hasChildren: false, children: [] },
  { id: "shop", label: t("shop"), link: "/shop", icon: AiOutlineShoppingCart, hasChildren: false, children: [] },
  { 
    id: "telegram", 
    label: t("telegram"), 
    link: "/telegram", 
    icon: PiTelegramLogo, 
    hasChildren: true, 
    children: [
      { id: "english", label: t("English"), link: "/telegram/english" },
      { id: "chinese", label: t("简体中文"), link: "/telegram/chinese" },
      { id: "korean", label: t("한국어"), link: "/telegram/korean" },
      { id: "vietnamese", label: t("Tiếng Việt"), link: "/telegram/vietnamese" },
      { id: "turkish", label: t("Türkçe"), link: "/telegram/turkish" },
      { id: "arabic", label: t("Arabic"), link: "/telegram/arabic" }
    ]
  },
  { id: "x", label: t("x"), link: "/x", icon: RiTwitterXFill, hasChildren: false, children: [] },
  { id: "facebook", label: t("facebook"), link: "/facebook", icon: LiaFacebookSquare, hasChildren: false, children: [] },
];

export default SidebarArray;