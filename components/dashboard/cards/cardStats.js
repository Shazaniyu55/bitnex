import MyModal from "@/components/modal";
import React, {useState, Fragment} from "react";
import { FaPlus} from 'react-icons/fa'



export default function CardStats({
  statSubtitle,
  statTitle,
  statIconColor,
}) {
  const [showModal, setShowModal] = useState(false)


  return (
    <Fragment>
      <div className="relative flex flex-col min-w-0 break-words bg-secondary rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <button
              onClick={()=> setShowModal(true)}
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <FaPlus scale={50}/>
              </button>
            </div>
          </div>
          <MyModal isVisible={showModal} onClose={()=>{setShowModal(false)}} />
        
        </div>
      </div>
    </Fragment>
  );
}

