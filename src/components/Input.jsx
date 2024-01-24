
const Input = () => {
    const thead=['SNO','Month & Year','Forecasted_Quantity','Lower Bound','Upper Bound']
    const tdata=[['50','Mar 2023','1328','1262','1395'],['51','Apr 2023','1316','1250','1381'],['52','May 2023','1259','1196','1322']]
    const category=['injections','ointments','tablets','inhalers'];
  return(
    <div className=" p-2 relative h-screen ">
        <div className="flex flex-row items-stretch gap-2 ">

            <div className=" box-border border-solid hover:border-2 hover:bg-logo-match  rounded-lg basis-1/3 flex-1 hover:shadow-violet hover:shadow-2xl hover:-translate-y-1 ease-in duration-500  hover:translate-x-4">
                <div className="m-5 mt-10">

                    <label className="pr-5 text-left">select a category:</label>
                    <select className=" h-10 min-w-40 bg-logo-match1 transition ease-in hover:-translate-y-1 hover:scale-125  duration-500 shadow-lg  drop-shadow-xl">
                        {category.map((cat)=>(
                            <option  className="uppercase">{cat}</option>
                        ))}
                    </select>

                    <div className="mt-4">
                        <p>Select Confidence Interval:</p>
                        <form className="inline-block  hover:scale-125 mt-2 duration-700  delay-10 transform ease-in-out ">
                            
                            <input className='ml-2' id='95' type='radio' name='interval' />
                            <label className="mr-5" for="95">95</label>
                            
                            <input className="ml-3" id='90' type='radio' name='interval' />
                            <label for='90'>90</label>
                        </form>
                    </div>
                    <div className="mt-10 flex flex-col">
                        <a href="#" className='underline text-[#2563eb]'> Download Combined Forecasts CSV</a>
                        <button className="justify-start mt-4 h-fit  text-lg hover:-translate-y-1 hover:bg-[#881337] shadow-2xl shadow-[#881337] ease-in-out delay-700 duration-700 text-rose hover:text-white  bg-green hover:shadow-green w-fit p-1 ">Upload to AWS S3</button>
                    </div>
                </div> 
                

                
                
                
            </div>
            <div className=" h-screen  border-solid hover:border-2 hover:bg-logo-match basis-2/3 box-border box-shadow-full flex-auto rounded-lg hover:shadow-violet hover:shadow-2xl hover:-translate-y-1 ease-in duration-500 hover:-translate-x-4">
                <div>
                    <div className="m-10 align-middle mb-5 ml-40 items-start inline-block">
                        <label className="font-bold  tracking-wide italic" for="drug_name ">Drug Name:  </label>
                        <span className="uppercase subpixel-antialiased font-weight-400" id="drug_name">meropenem 1gm inj</span>
                    </div>

                    <table className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-[#22c55e] duration-500 table-auto bg-[#6366f1] shadow-xl hover:shadow-[#22c55e]/50 shadow-[#6366f1]/50 border-collapse border border-slate-300 m-auto">
                        <caption className=" text-sm font-poppins text-[#85888b]">Data: Next 3 months forecast</caption>
                        <thead>
                            <tr>
                                {thead.map((value)=>(
                                    <th className="border p-2 border-black-400 text-center">{value}</th>
                                ))}
                                {/* <th>Month & Year</th>
                                <th>Forecasted_Quantity</th>
                                <th>Lower Bound</th>
                                <th>Upper Bound</th> */}
                            </tr>
                        </thead>
                        <tbody>
                                {tdata.map((row_each)=>(
                                <tr> {row_each.map((values)=>(
                                        <td className="border p-2 border-black-500 text-center">{values}</td>
                                    ))}</tr>
                                ))}
                        </tbody>
                    </table>
                    <div className="mt-10 ml-40 inline-block">
                        <label className="font-bold  tracking-wide italic capitalize" for="drug_name ">Recorded point:  </label>
                        <span className="uppercase subpixel-antialiased font-weight-400" id="drug_name">408.0</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
    
}

export default Input
/*

// border-l-4 border-b-4 border-r-4 border-indigo-600 
<div className="m-2 p-2  border-2 border-indigo-600 h-dvh  flex flex-row">
        <div className="flex-basis-44">
            <label for="choose_category" className="font-sans text-xl mr-10">
                Select a category: 
            </label>
            <select id="choose_category" className="uppercase h-10 w-1/4">
                    <option>injections</option>
                    <option>tablets</option>
                    <option>Ointments</option>
                    <option>Inhalers</option>
            </select>
        </div>


        <div className=" flex-basis-56">
        <p>this is div2</p>
        </div>
  </div>

  */

 /*
 border-2 border-rose 
 border-2 border-l-0 border-violet

 */