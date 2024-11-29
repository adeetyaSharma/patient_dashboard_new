import React from "react";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import HealthStatus from "./HealthStatus";
import Appointments from "./Appointments";
import ActivityGraph from "./ActivityGraph";
import MyCalendar from "./MyCalender";

const Layout = () => {
    return (
        <div className="flex w-screen min-h-screen bg-slate-800">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 p-6 space-y-8 overflow-auto">
                {/* UserProfile next to Sidebar */}
                <div className="flex items-start space-x-6">
                    <UserProfile />
                    <div className="flex flex-col space-y-8">
                        <HealthStatus />
                        <ActivityGraph />
                    </div>
                </div>

                {/* Below content */}
                <div className="flex">
                    <Appointments />
                    <MyCalendar />
                </div>
            </div>
        </div>
    );
};

export default Layout;
