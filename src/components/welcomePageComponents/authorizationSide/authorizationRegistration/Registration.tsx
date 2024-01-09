import { useState } from "react"
import BackAndStep from "../../../coponentParts/BackAndStep"
import Button from "../../../coponentParts/Button"
import Input from "../../../coponentParts/Input"
import {Link} from 'react-router-dom'


const Registration = () => {

    const [emailValue , setEmailValue] = useState('')
    const [emailTrue , setEmailTrue] = useState(false)
    const [count , setCount] = useState(1)
    const [string , setString] = useState('Send Code')

    const [confirmationCode , setConfirmationCode] = useState('')

    console.log(confirmationCode)
    const handleClick = () => {

        console.log("zdarova")
        if(emailValue === 'jamagidzeb@gmail.com'){

            setEmailTrue(true)
            console.log(emailTrue)
            setString("Confirm")
        }
        else{
            setEmailTrue(false)
            console.log(emailTrue)
        }

        
    }


    return(
        <div className="w-[80%] h-[440px]  mt-[80px]  grid-cols-1 flex flex-col justify-evenly">

            <Link to='/' >


                <BackAndStep 
                    back="Back to Authorization"
                    step="1/3"
                />
            </Link>

            <div className="w-[70%] h-[500px]  m-auto mt-[60px]   flex flex-col justify-evenly">

                <div className="forText h-[110px] flex flex-col justify-between   grid-cols-1">

                    <h1 className="text-[30px] font-bold font-serif text-[#5B5B5B]">
                        Registration
                    </h1>

                    <p className="text-[18px]  font-serif grid-cols-1 text-[#8C8C8C]">
                        Fill in the registration data. It will take a couple of minutes. 
                        All you need is an email and a password
                    </p>
                </div>

                <div className="forInput flex flex-col justify-between mt-[40px]  "> 
                    <Input 
                        className="w-[100%] h-[63px] pl-[10px] rounded-[6px]  bg-[#fff0] border-[1px] placeholder-[#8C8C8C] border-[#8692A6] text-[#8C8C8C]   focus:outline-none outline-none focus:border-blue-600 "
                        placeholder="Email"
                        type="text"
                        onChange={(e) => setEmailValue(e.target.value) }

                    />
                    <div className="forResend ">
                        {
                            emailTrue === true 
                            ?
                                <div className="  ">

                                    <Input 
                                        className="w-[100%] h-[63px] pl-[10px] rounded-[6px] placeholder-[#8C8C8C]  bg-[#fff0] border-[1px] border-[#8C8C8C]    focus:outline-1 outline-blue-600  mt-[22px] grid-cols-1"
                                        placeholder="Confirmation Code"
                                        type="text"
                                        onChange={(e) => setConfirmationCode(e.target.value)}
                                    />
                                    <p className="text-[16px] pt-[10px] text-[#8C8C8C] ml-[6px]">Confirm email code from sms message</p>
                                    


                                </div>
                                
                            :
                                null
                        }

                        

                    </div>
                </div>

                <div className="forButton mt-[40px]">

                    {
                        confirmationCode.length >4 
                        ?
                            <Link to="/registrationlast">
                                <Button 
                                    className="w-[142px] h-[50px] border-[1px]  bg-[#1565D8] shadow-transparent  text-white  rounded-[5px] text-[14px] "
                                    name={string}
                                    onClick={handleClick}
                                />
                            </Link>
                        :
                            <Button 
                                className="w-[142px] h-[50px] border-[1px] border-black text-[#8C8C8C]  rounded-[5px] text-[14px] "
                                name={string}
                                onClick={handleClick}
                                
                            />

                    }
                    
                </div>


            </div>
           
        </div>
    )
}

export default Registration