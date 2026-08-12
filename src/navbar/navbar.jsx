function NavBar() {
    return (
        <div className=" flex my-1 top-0 mx-auto justify-between items-center  backdrop-blur-md px-2 py-3 shadow-[0_8_32px_0_rgba(236,72,153,0.25)] w-full pt-0">

            <div>
                <h1 className=" black-ops-one-regular text-2xl font-extrabold text-gray-900 ">
                    My to-do
                </h1>
            </div>

            
            <div>
                <button className="bg-slate-900/80 black-ops-one-regular text-blue-300 font-semibold px-5 py-1.5 rounded-xl border-2 border-pink-500 shadow-[3px_3px_0px_0px_rgba(59,130,246,1)] hover:shadow-[1px_1px_0px_0px_rgba(59,130,246,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer black-ops-one-regular">
                    dark
                </button>
            </div>
        </div>
    );
}

export default NavBar;