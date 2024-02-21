import React from "react";

// components

import FooterAdmin from "../footers/footerAdmin";
import Sidebar from "../sidebar/sideBar";
import HeaderStats from "../headers/headerStats";
import AdminNavbar from "../navbar/adminNavBar";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}