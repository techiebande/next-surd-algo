import React from "react";
import SectionContainer from "../sectionContainer";
import SectionHeader from "../SectionHeader";
import StatsCard from "./StatsCard";
import { adminDashboardStats } from "@/lib/admin-dashboard-stats";
import { adminDashboardData } from "@/lib/admin-dashboard-data";
import { DashboardChart } from "./dashboardChart";
import Message from "./Message";

const Dashboard = () => {
  return (
    <SectionContainer className="mt-4 min-h-[calc(100vh-85px)]">
      <div className="px-5">
        <SectionHeader
          location="Home /Admin Dashboard"
          title="Welcome To Dashboard"
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {adminDashboardStats.map(({ name, value }, i) => (
            <StatsCard key={i} name={name} value={value} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {adminDashboardData.map(({ name, value }, i) => (
                <StatsCard key={i} name={name} value={value} />
              ))}
            </div>
            <div>
              <DashboardChart />
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg">
            <div className="p-5 border-b border-gray-400 text-sm text-gray-800 dark:text-white">
              Recent Messages
            </div>
            <div>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Dashboard;
