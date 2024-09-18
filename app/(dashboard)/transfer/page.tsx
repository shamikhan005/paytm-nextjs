
export default function() {





    return (
     
        <div>

            <h1 className="text-[3rem] font-bold ml-[3rem] mt-[3rem] text-purple-500">TRANSFER</h1>

<div className="grid grid-cols-2 p-[8rem] w-[100vw]">
      <div className="flex flex-col p-[3rem] ">
        <h1 className="text-[2rem] font-bold">Add Money</h1>

        <label htmlFor="" className="mt-[4rem]">Amount</label>
        <input type="text" className="w-[20rem] mt-[10px]" />
 
        <label htmlFor="" className="mt-7">Bank</label>
        <input type="text" className="w-[20rem] mt-[10px] mb-8" />

        <div className="flex justify-center items-center">
        <button className="bg-blue-500 font-semibold w-[12rem] p-[1rem] text-white rounded-full">Add Money</button>
        </div>

       

      </div>

      <div className="grid grid-flow-row grid-rows-2">

        <div>
            <h1>Balance</h1>
            
        </div>

        <div>
            <h1>recent Transactions</h1>
        </div>

      </div>
    </div>

        </div>
    
    )
}