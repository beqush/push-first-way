import BackAndStep from "../../../coponentParts/BackAndStep"
import { useState } from "react"
import Input from "../../../coponentParts/Input"
import Button from "../../../coponentParts/Button"
import {Link} from 'react-router-dom'

const Reset = () => {

    const [emailValue , setEmailValue] = useState('')
    const [checkTrue , setCheckTrue] = useState(false)
    // aq ar daiviwyo qush axali state gvinda
    const [disabled , setDisabled] = useState('disabled')

    const [inputColor , setInputColor] = useState('')

    

    const handleClick = () => {

        console.log(emailValue)
        if(emailValue === 'jamagidzeb@gmail.com'){
            setCheckTrue(true)
            console.log(checkTrue)
            setInputColor('border-[#08AD36]')
           
            
        }
        else{
            setInputColor('border-[#F05571]')
            setCheckTrue(false)

        }
    }
    return(
        <div className="w-[90%] h-[440px]  mt-[100px]  grid-cols-1 flex flex-col justify-evenly">
            <Link to='/' >
            
                <BackAndStep 
                    back="Back"
                    step='Step 1/3'
                />
            </Link>


            <div className="w-[426px] h-[440px]   m-auto mt-[20px]  grid-cols-1 flex flex-col justify-evenly">

                <div className="w-[80%]">
                    <h1 className="text-[30px]  font-sans text-[#5B5B5B] font-bold">
                         Reset your password!
                    </h1>

                    <p className="text-[#8C8C8C] mt-[10px] text-[18px] font-sansf">
                        For the purpose of industry regulation, your details are required.
                    </p>
                </div>

                <div className="mt-[30px] relative">
                    <Input 
                        placeholder="Please enter Email"
                        type="text"
                        className={  " w-[100%] h-[63px] pl-[10px] rounded-[6px]  bg-[#fff0] border-[1px] border-[#8692A6]    focus:outline-1 outline-blue-600 placeholder-[#8692A6] " + inputColor} 
                        onChange={(e)=> {setEmailValue(e.target.value)}}
                        
                        
                    />

                    {
                        checkTrue === true 
                        ? 

                             <svg className="absolute top-6 right-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833496 10C0.833496 4.93739 4.93755 0.833332 10.0002 0.833332C15.0628 0.833332 19.1668 4.93739 19.1668 10C19.1668 15.0626 15.0628 19.1667 10.0002 19.1667C4.93755 19.1667 0.833496 15.0626 0.833496 10Z" fill="#08AD36"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4257 6.70244C14.7512 7.02788 14.7512 7.55552 14.4257 7.88095L9.25316 13.2976C8.92772 13.6231 8.40008 13.6231 8.07464 13.2976L5.57464 10.7976C5.24921 10.4722 5.24921 9.94455 5.57464 9.61911C5.90008 9.29367 6.42772 9.29367 6.75316 9.61911L8.6639 11.5299L13.2472 6.70244C13.5727 6.37701 14.1003 6.37701 14.4257 6.70244Z" fill="white"/>
                            </svg>
                        :

                            <svg  className="absolute top-6 right-6 none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M7.64 21C2.17196 21 1 19.828 1 14.36" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21.0004 14.36C21.0004 19.828 19.8284 21 14.3604 21" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M14.3604 1C19.8284 1 21.0004 2.17196 21.0004 7.64" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M6.55566 15.4444C7.56923 14.0951 9.18289 13.2222 11.0006 13.2222C12.8181 13.2222 14.4318 14.0951 15.4453 15.4444" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M7.66699 8.79022V8.77778" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M14.333 8.79022V8.77778" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 7.64C1 2.17196 2.17196 1 7.64 1" stroke="#F05571" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            

                    }
                    
                </div>

                <div className="forButton  mt-[20px]">
                    <Button 
                        className="w-[100%] h-[63px] bg-[#1565D8] text-white text-[16px] rounded-[5px]   font-sans "
                        name="Save & Continue"
                        onClick={handleClick}
                    />
                </div>

                <div className=" w-[100%]  ">
                    <div className="w-[50%] m-auto flex justify-evenly">

                        <div className="icon w-[20px] h-auto mt-[1px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4166 4.95833H10.9999C11.6416 4.95833 12.1666 5.48333 12.1666 6.125V11.9583C12.1666 12.6 11.6416 13.125 10.9999 13.125H3.99992C3.35825 13.125 2.83325 12.6 2.83325 11.9583V6.125C2.83325 5.48333 3.35825 4.95833 3.99992 4.95833H4.58325V3.79167C4.58325 2.18167 5.88992 0.875 7.49992 0.875C9.10992 0.875 10.4166 2.18167 10.4166 3.79167V4.95833ZM7.49992 2.04167C6.53159 2.04167 5.74992 2.82333 5.74992 3.79167V4.95833H9.24992V3.79167C9.24992 2.82333 8.46825 2.04167 7.49992 2.04167ZM3.99992 11.9583V6.125H10.9999V11.9583H3.99992ZM8.66658 9.04167C8.66658 9.68333 8.14158 10.2083 7.49992 10.2083C6.85825 10.2083 6.33325 9.68333 6.33325 9.04167C6.33325 8.4 6.85825 7.875 7.49992 7.875C8.14158 7.875 8.66658 8.4 8.66658 9.04167Z" fill="#8692A6"/>
                            </svg>
                        </div>

                        <p className="text-[12px] text-[#8692A6]  font-serif">
                            Your Info is safely secured
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Reset