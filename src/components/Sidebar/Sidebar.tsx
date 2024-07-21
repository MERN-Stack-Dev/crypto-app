import React, { useState } from 'react';
import './Sidebar.css';
import { MdDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Sidebar() {
  const [hidden, setHidden] = useState(false);
  const handleNavToggle = (e: any) => {
    e.preventDefault();
    setHidden(!hidden);
  }

  return (
    <>
      {
        hidden && (
          <button onClick={handleNavToggle} className='toggle-btn2'>
            <IoIosArrowDroprightCircle style={{width: "2rem", height: "2rem"}} />
          </button>
        )
      }
      <div className={`${hidden ? "sidebar-hidden" : "sidebar"}`}>
        <div className="sidebar-header">
          <h2>krypto<span className='link'>Link</span></h2>
          <button onClick={handleNavToggle} className='btn-left'>
            <IoIosArrowDropleftCircle style={{width: "2rem", height: "2rem"}} />
          </button>
        </div>
        <div className="sidebar-menu">
          <div className="menu-item">
            <div>
              <MdDashboard />
            </div>
            <div>
              Dashboard
            </div>
          </div>
          <div className="menu-item">
            <div>
              <VscGraph />
            </div>
            <div>
              Market
            </div>
          </div>
          <div className="menu-item">
            <div>
              <CiWallet />
            </div>
            <div>
              Wallet
            </div>
          </div>
          <div className="menu-item">
            <div>
              <AiOutlineTransaction />
            </div>
            <div>
              Transaction
            </div>
          </div>
          <div className="menu-item">
            <div>
              <IoIosPeople />
            </div>
            <div>
              Community
            </div>
          </div>
          <div className="menu-item">
            <div>
              <IoMdSettings />
            </div>
            <div>
              Settings
            </div>
          </div>
          <div className='menu-item-2'>
            <div className="menu-item">
              <div>
                <MdContactSupport />
              </div>
              <div>
                Support
              </div>
            </div>
            <div className="menu-item">
              <div>
                <MdFeedback />
              </div>
              <div>
                Feedback
              </div>
            </div>        </div>
        </div>
        <div className="theme-toggle">

          <button>
            <div>
              <MdNightlightRound />
              Dark
            </div>
          </button>
          <button>
            <div className='btn-toggle'>
              <FaSun />
              Light
            </div>
          </button>
        </div>
      </div>
    </>



  );
}

export default Sidebar;
