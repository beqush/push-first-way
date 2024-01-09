import Button from "../../../coponentParts/Button"

import { useState } from "react"
import Input from "../../../coponentParts/Input"
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";




const Authorization = () => {

const [checkTrue , setCheckTrue] = useState (false)

// inputs Values
const [userValue , setUserValue] = useState ('')
const [userPass , setUSerPass] = useState('')
// end






    const handleClick = () => {

        console.log("gamarjoba ")
        setCheckTrue(true)
        alert(userValue + ' ' + ' ' + userPass)
    }

   
    return(


        <div className=" w-[426px] h-[440px] mt-[100px]  grid-cols-1 flex flex-col justify-evenly  ">

            <div>
                <h1 className="text-[#5B5B5B] text-[30px]  ">
                    Authorization
                </h1>

            </div>

            <div className=" flex flex-col justify-evenly w-[100%] h-[200px]   ">

                <Input 
                    className="w-[100%] h-[63px] pl-[10px] rounded-[6px]  bg-[#fff0] border-[1px] border-[#8692A6] text-[#8692A6]   focus:outline-1 outline-blue-600 placeholder-[#8C8C8C] "
                    placeholder="Username :"
                    onChange={(e) => setUserValue(e.target.value)}
                    type="text"

                />
                
                <Input 
                    className="w-[100%] h-[63px] pl-[10px] rounded-[6px]  bg-[#fff0] border-[1px] border-[#8692A6] text-[#8692A6]  focus:outline-1 outline-blue-600 placeholder-[#8C8C8C] "
                    placeholder="Password :"
                    onChange={(e)=> setUSerPass(e.target.value)}
                    type="password"
                />

            </div>

            <div className="rememberForget w-[100%] h-auto  flex flex-row  justify-between border-[1px] border-white gird-cols-1">

                    <Input 
                        className="w-[15px] h-[20px] cursor-pointer mt-[2px]"
                        type="checkbox"
                    />
                
                    <p className="text-[#2280EF] font-sans">
                        
                            <Link to='/reset' >
                            
                                Forgot Password?
                            </Link>
                        
                    </p>

            </div>

            <div className="forButton w-[100%] h-auto ">

                {
                    userValue.length >= 4 && userPass.length >= 4
                    ?
                        <Button 
                            className="w-[100%] h-[63px] bg-[#1565D8] text-white text-[20px] rounded-[5px] font-serif " 
                            name="Login"
                            onClick={handleClick}
                            // disabled
                            active='active'
                        />
                    :
                        <Button 
                            className="w-[100%] h-[63px] bg-[#1566d8c9] text-white text-[20px] rounded-[5px] font-serif " disabled
                            name="Login"
                            onClick={handleClick}
                            // disabled
                            active='active'
                        />

                }
                   
                    
            </div>

            <div className="registerLink  w-auto text-white ">
                    <p className="text-center font-sans text-[20px] text-[#2280EF]">
                        <Link to="/registration">
                        
                            Registration
                        </Link>
                        
                        
                    </p>
            </div>


        
               
        </div>
    )
}

export default Authorization