import React from "react";

// components

import CardSettings from "@/components/dashboard/cards/cardSetting";
import CardProfile from "@/components/dashboard/cards/cardProfile";

// layout for page

import Admin from "@/components/dashboard/layouts/admin";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;