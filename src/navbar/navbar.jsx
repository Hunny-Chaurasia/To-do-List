function NavBar() {
    return (
        <div className="flex my-6 mx-auto justify-between items-center gap-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-3 shadow-[0_8_32px_0_rgba(236,72,153,0.25)] max-w-xl">
            {/* Logo with Pink-to-Blue Gradient Text */}
            <div>
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                    My to-do
                </h1>
            </div>

            
            <div>
                <button className="bg-slate-900/80 text-blue-300 font-semibold px-5 py-1.5 rounded-xl border-2 border-pink-500 shadow-[3px_3px_0px_0px_rgba(59,130,246,1)] hover:shadow-[1px_1px_0px_0px_rgba(59,130,246,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer">
                    dark
                </button>
            </div>
        </div>
    );
}

export default NavBar;