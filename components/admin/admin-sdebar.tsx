"use client";

import React, { useContext, useState } from "react";
// import Logo from "../logo";
import { sidebarItems } from "@/lib/sidebarItems";
import { DashboardContext } from "../dashboard";
import { cn } from "@/lib/utils";
import SidebarItem, { SidebarItemProps } from "./sidebarItem";
import HomeIcon from "../icons/Home";
import UsersIcon from "../icons/Users";
import { AdminDashboardContext } from "./admin-dashboard";
import OfficeIcon from "../icons/Office";
import BulbIcon from "../icons/Bulb";
import MessagesIcon from "../icons/Messages";
import TicketIcon from "../icons/TicketIcon";
import NotesIcon from "../icons/NotesIcons";
import FavoriteIcon from "../icons/FavoriteIcon";
import Logo from "./logo";

const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const selectTab = (tab: string) => {
    setActiveTab(tab);
  };

  const { isSidebarFold, changeCurrentTab } = useContext(AdminDashboardContext);

  const sidebarClass = `${isSidebarFold ? "" : "md:w-[170px]"}`;

  const isActiveTab = (tab: string) => activeTab === tab;

  return (
    <aside
      className={cn(
        "h-[100vh] overflow-y-auto pb-4 bg-surd-dark-blue dark:bg-black transition-[width] w-[70px] fixed left-0 top-0",
        sidebarClass
      )}
    >
      <div className="pt-4 md:pl-5">
        <Logo />
      </div>
      <div className="flex flex-col mt-8 space-y-8">
        <SidebarItem
          onClick={() => {
            selectTab("dashboard");
            changeCurrentTab("dashboard");
          }}
          active={isActiveTab("dashboard")}
          name={"Dashboard"}
          icon={
            isActiveTab("dashboard") ? (
              <HomeIcon color="#1D82F5" size={24} />
            ) : (
              <HomeIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("clients");
            changeCurrentTab("clients");
          }}
          active={activeTab === "clients"}
          name={"Clients"}
          icon={
            isActiveTab("clients") ? (
              <UsersIcon color="#1D82F5" size={24} />
            ) : (
              <UsersIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("EAs");
            changeCurrentTab("EAs");
          }}
          active={activeTab === "EAs"}
          name={"EAs"}
          icon={
            isActiveTab("clients") ? (
              <OfficeIcon color="#1D82F5" size={24} />
            ) : (
              <OfficeIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("strategies");
            changeCurrentTab("strategies");
          }}
          active={activeTab === "strategies"}
          name={"Strategies"}
          icon={
            isActiveTab("strategies") ? (
              <BulbIcon color="#1D82F5" size={24} />
            ) : (
              <BulbIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("messages");
            changeCurrentTab("messages");
          }}
          active={activeTab === "messages"}
          name={"Messages"}
          icon={
            isActiveTab("messages") ? (
              <MessagesIcon color="#1D82F5" size={24} />
            ) : (
              <MessagesIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("tickets");
            changeCurrentTab("tickets");
          }}
          active={activeTab === "tickets"}
          name={"Tickets"}
          icon={
            isActiveTab("tickets") ? (
              <TicketIcon color="#1D82F5" size={24} />
            ) : (
              <TicketIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("billings");
            changeCurrentTab("billings");
          }}
          active={activeTab === "billings"}
          name={"Billings"}
          icon={
            isActiveTab("billings") ? (
              <NotesIcon color="#1D82F5" size={24} />
            ) : (
              <NotesIcon color="#626972" size={24} />
            )
          }
        />
        <SidebarItem
          onClick={() => {
            selectTab("services");
            changeCurrentTab("services");
          }}
          active={activeTab === "services"}
          name={"Services"}
          icon={
            isActiveTab("services") ? (
              <FavoriteIcon color="#1D82F5" size={24} />
            ) : (
              <FavoriteIcon color="#626972" size={24} />
            )
          }
        />
      </div>
    </aside>
  );
};

export default AdminSidebar;
