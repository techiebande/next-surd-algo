import React, { useContext } from "react";
import { cn } from "@/lib/utils";
import Strategies from "../strategies";
import EAs from "../EAs";
import { AdminDashboardContext } from "./admin-dashboard";
import Dashboard from "./dashboard";
import Messages from "../Messages";
import Tickets from "../tickets";
import BillingsAdmin from "../BillingsAdmin";
import Users from "../Users";
import Navbar from "./navbar";

const AdminMainContent = () => {
  const { isSidebarFold, dashboardState } = useContext(AdminDashboardContext);
  return (
    <div
      className={cn(
        "w-[calc(100vw-70px)] ml-[70px]",
        isSidebarFold
          ? ""
          : "w-[calc(100vw-70px)] md:w-[calc(100vw-170px)] md:ml-[170px]"
      )}
    >
      <Navbar />
      <div className="w-full">
        {dashboardState.currentTab === "dashboard" ? <Dashboard /> : null}
        {dashboardState.currentTab === "EAs" ? <EAs isAdmin={true} /> : null}
        {dashboardState.currentTab === "strategies" ? (
          <Strategies isAdmin={true} />
        ) : null}
        {dashboardState.currentTab === "messages" ? <Messages /> : null}
        {dashboardState.currentTab === "billings" ? <BillingsAdmin /> : null}
        {dashboardState.currentTab === "tickets" ? <Tickets /> : null}
        {dashboardState.currentTab === "clients" ? <Users /> : null}
      </div>
    </div>
  );
};

export default AdminMainContent;
