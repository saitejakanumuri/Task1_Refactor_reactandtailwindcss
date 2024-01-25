const Nav = () => {
  const Appname= ['D', 'R', 'U', 'G',' ','Q','U','A','N','T','I','T','Y',' ','F','O','R','E','C','A','S','T','I','N','G']; 
  return (
    <div className="sticky bg-logo-match top-0 z-50 hover:-translate-y-2 duration-700 delay-700  hover:shadow-violet hover:shadow-2xl border-2 w-auto m-2">
      <div className='flex flex-row mb-3 mt-5 border-box border-[#94a3b8] rounded-lg relative  w-full h-auto'>
        
        <div className="flex-none">
        <img className='float-left ml-2 size-fit' src="../src/assets/company-logo.png " alt='comp-logo' />
        </div>
          {Appname.map((letter)=>(
        <div className='flex-row overflow-hidden gap-3 flex-basis-[25px] p-1 font-bold tracking-tighter translation scale-150 mt-3 ml-2 hover:-translate-y-3  hover:scale-y-50 duration-700  text-rose hover:shadow-rose hover:shadow-2xl'><nav id={letter} className="text-[35px]">{letter}</nav></div>
          ))}
      </div>
    </div>
  )
}

export default Nav
//box-border p-4 border-4

//<h2 className= ' text-4xl font-extrabold tracking-widest font-poppins text-[#dc2626] italic w-auto h-auto pt-4 indent-40 text-start'>DRUG QUANTITY FORECASTING</h2>
//transition hover:-translate-x-4  shadow-lg  translate-x-1 scale-125 duration-700 delay-75 
//translation hover:-translate-y-3 duration-700 delay-100