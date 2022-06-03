import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <div className={selectedTab === "INBOX" ? "active" : ""}>
        <FaInbox className="icon" />
        Inbox
      </div>
      <div className={selectedTab === "TODAY" ? "active" : ""}>
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div className={selectedTab === "NEXT_7" ? "active" : ""}>
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default Sidebar;
