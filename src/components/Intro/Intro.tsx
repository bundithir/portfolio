const Intro = () =>{
    return(
        <div className="bg-[#15202B] py-[5rem] w-full">
            <div className="grid grid-row-2 md:grid-cols-2 h-full items-center w-[90%] mx-auto gap-[2rem]">
                <div className="flex justify-center items-center">
                    <img src="/circle.jpg" className="bg-[#15202B] rounded-full drop-shadow-lg" width={400} alt="" />
                </div>
                <div className="text-white">
                    <p className="mx-auto md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 font-bold w-fit p-2 border-white border mb-[1.5rem]">Welcome to my Portfolio</p>
                    <p>Hi, my name is</p>
                    <p className="text-3xl font-bold text-[#8899A6] ">Bundit Hirunwongsawang.</p>
                    <p className="text-3xl font-bold text-[#8899A6] mb-[1rem]">You can call me Peet.</p>
                    <p className="text-[#8899A6] lg:max-w-[515px]">Developer / Front-end Developer</p>
                </div>
            </div>
        </div>
    )
}
export default Intro;