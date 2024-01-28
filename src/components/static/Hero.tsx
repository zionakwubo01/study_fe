import { NavLink } from "react-router-dom"


const Hero = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-full h-[400px] bg-white
            flex  flex-col items-center justify-center gap-[20px]
            ">
                <div className="font-bold text-[50px] text-center sm:text-center">integrated school platform</div>
                <div className="font-[500] text-[30px]">your co-pilot for</div>
                <div className="font-bold text-[30px] text-center sm:text-center
                sm:text-[30px]
                ">

                    <h1>Study App</h1>

                </div>

                <NavLink to="register">
                    <button className="w-[200px] h-[50px] bg-slate-500 border-[1px] border-solid border-slate-600
                        rounded-lg text-white font-bold text-[15px] sm:h-[50px] sm:w-[300px]
                        ">
                        create acccount
                    </button>
                </NavLink>

            </div>
        </div>
    )
}

export default Hero