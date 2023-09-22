import resume from '../../assets/BunditCV.pdf'
const Intro = () =>{
    return(
        <div className="bg-[#15202B] py-[5rem] w-full">
            <div className="grid grid-row-2 md:grid-cols-2 h-full items-center w-[90%] mx-auto gap-[2rem]">
                <div className="flex justify-center md:justify-center items-center row-start-2 md:row-start-1">
                    <img src="/circle.jpg" className="bg-[#15202B] rounded-full drop-shadow-lg" width={400} alt="" />
                </div>
                <div className="text-white text-center md:text-start">
                    <p>Hi, my name is</p>
                    <p className="text-5xl md:text-3xl pb-2 md:pb-0 font-bold text-[#8899A6] ">Bundit Hirunwongsawang</p>
                    <p className="text-3xl font-bold text-[#8899A6] mb-[1rem]">You can call me Peet</p>
                    <p className="text-[#8899A6] lg:max-w-[515px]">Developer</p>
                    <div className="flex gap-[1.5rem] justify-center md:justify-start my-8">
                        <button><a download href={resume} className="p-3 font-bold border rounded-md border-red-500 text-red-500 duration-300 hover:text-[#15202B] hover:bg-red-500">Download CV</a></button>
                        <button><a href="#contact" className="p-3 font-bold border rounded-md border-red-500 bg-red-500 text-[#15202B] duration-300 ">Contact me</a></button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Intro;