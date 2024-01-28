import { useState } from "react";
import Button from "../components/reuse/Button";
import Input from "../components/reuse/Input";

import { useNavigate } from "react-router-dom";
import { Createuser } from "../api/api";
const Register = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<string>("");
    const [state2, setstate2] = useState<string>("");


    // console.log("this is loading ", loading)
    const Handlesubmit = (e: any) => {
        e.preventDefault();

        Createuser({ email: state, password: state2 }).then((res) => {
            console.log("this is acc", res)
        }).then(() => {
            navigate("/verify")
        })
    }

    return (
        <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
            <div className="mb-10 text-center flex items-center w-full flex-col">
                <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
                    SCH
                </div>
                <div className="text-[26px] font-bold mb-3">Create an Account</div>
                <div className="text-[14px] -mt-4 ">
                    sign up now and get free account instant.
                </div>
            </div>

            <form
                className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"

            >
                <Input
                    placeholder="Email"
                    className="w-[97%]"
                    type="email"
                    required
                    value={state}
                    onChange={(e: any) => {
                        setState(e.target.value);
                    }}
                />
                <Input
                    placeholder="password"
                    className="w-[97%]"
                    type="email"
                    required
                    value={state2}
                    onChange={(e: any) => {
                        setstate2(e.target.value);
                    }}
                />

                <div>
                    <Button
                        name={"register"}
                        className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
                        onClick={Handlesubmit}

                    />

                </div>
                <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
                    Sign up with social network
                </div>
                {/* <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 bg-red-500 hover:bg-red-600 hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div> */}
            </form>
            <div className="mt-5 text-[13px]">
                Already have an Account?{" "}
            </div>
        </div>
    );
};

export default Register;
