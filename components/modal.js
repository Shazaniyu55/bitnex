import React from "react";

const MyModal = ({isVisible, onClose})=>{
    if(!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === "wrapper") onClose()

    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl
                place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-white">
                    <div className="py-6 px-6 lg:px-8 text-left">
                    <div className="flex flex-col">
                        <h3 className="mb-4 text-xl font-medium text-gray-900">Fill the form below</h3>
                        <input type="text"
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Amount"
                        />

                        <input type="text"
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bank"
                        />

                        <input type="text"
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Account number"
                        />

                        <input type="text"
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Account name"
                        />
                        
                <button className="px-5 py-2 bg-blue-700 text-white rounded">
                    Withdraw
                </button>
                            

                        </div>
                    </div>
                
             
                </div>

            </div>
        </div>
    )

}

export default MyModal;