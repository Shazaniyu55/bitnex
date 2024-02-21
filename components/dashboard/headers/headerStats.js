import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
// components

import CardStats from "../cards/cardStats";

export default function HeaderStats() {
  const count = useSelector((state) => state.users)
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Account Balance"
                  statTitle={`$${count[0].account}`}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green-500"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}