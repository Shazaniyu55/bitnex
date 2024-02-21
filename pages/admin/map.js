import React from "react";

// components

import MapExample from "@/components/dashboard/maps/maps";

// layout for page

import Admin from "@/components/dashboard/layouts/admin";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = Admin;