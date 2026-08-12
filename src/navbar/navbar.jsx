function NavBar() {
    return (
        <div className="fixed z-10 flex my-1 top-0 mx-auto justify-between items-center  backdrop-blur-md px-2 py-3 shadow-[0_8_32px_0_rgba(236,72,153,0.25)] w-full pt-0">

            <div>
                <h1 className=" black-ops-one-regular text-2xl font-extrabold text-gray-900 ">
                    My to-do
                </h1>
            </div>

            
            <div>
                <button className="black-ops-one-regular px-5 py-1.5 ">
                    <i class="fa-solid fa-sun"></i>
                </button>
            </div>
        </div>
    );
}

export default NavBar;