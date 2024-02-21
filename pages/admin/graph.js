import React from "react";

// components

import CardLineChart from "@/components/dashboard/cards/cardLineChart";
import CardBarChart from "@/components/dashboard/cards/cardBarChart";
import CardPageVisits from "@/components/dashboard/cards/carPageVisit";
import CardSocialTraffic from "@/components/dashboard/cards/cardSocialTraffic";

// layout for page


export default function Graph() {
  return (
    <>
    
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

