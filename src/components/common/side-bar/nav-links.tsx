import {
  MdAccountCircle,
  MdHome,
  MdOutlineDocumentScanner,
  MdPrivacyTip,
} from "react-icons/md";
import { IoBagHandleSharp, IoQrCode } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";

export const navLinks = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Resume Maker",
      link: "/resume",
    },
    {
      id: 3,
      label: "Invoice Generator",
      link: "/invoice",
    },
    {
      id: 4,
      label: "P&T Generator",
      link: "/terms",
    },
    {
      id: 5,
      label: "QR Code Generator",
      link: "/qr",
    },
    {
      id: 7,
      label: "Account",
      link: "/account",
    },
    {
      id: 8,
      label: "Buy Credit",
      link: "/buy-credit",
    },
  ];
  
  export const icon = {
    [navLinks[0].link]: <MdHome size={19} />,
    [navLinks[1].link]: <MdOutlineDocumentScanner />,
    [navLinks[2].link]: <FaFileInvoice />,
    [navLinks[3].link]: <MdPrivacyTip />,
    [navLinks[4].link]: <IoQrCode />,
    [navLinks[5].link]: <MdAccountCircle />,
    [navLinks[6].link]: <IoBagHandleSharp />,
  };
  
  