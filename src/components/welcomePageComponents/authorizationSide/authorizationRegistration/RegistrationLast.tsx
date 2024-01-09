import { useState } from "react"
import BackAndStep from "../../../coponentParts/BackAndStep"
import Button from "../../../coponentParts/Button"
import Input from "../../../coponentParts/Input"
import {Link} from 'react-router-dom'

const RegistrationLast = () => {

    const[passwordType , setPasswordType] = useState('password')
    const[repeatPasswordType , setRepeatPasswordType] = useState('password')

    const[passValue , setPassValue] = useState('')
    const [confirmPass , setConfirmPass] = useState('')

    const showPassword = () => {
        

        if(passwordType === 'password'){
            setPasswordType('text')
        }
        else{
            setPasswordType('password')
        }
        
    }

    const showRepeatPassword = () => {

        if(repeatPasswordType === 'password'){
            setRepeatPasswordType('text')
        }
        else{
            setRepeatPasswordType('password')
        }
    }
    return(

        <div className="w-[90%] h-[580px]  mt-[100px]  grid-cols-1 flex flex-col justify-evenly">

            <Link to='/'>
            
                <BackAndStep 
                    back="Back to Authorization"
                    step="1/3"
                />
            </Link>
        
            <div className="w-[426px] h-[540px]       m-auto  grid-cols-1 flex flex-col justify-evenly">


                <div className="forText h-[110px] flex flex-col justify-between  ">

                    <h1 className="text-[30px] font-bold-900  font-sans">
                        Registration
                    </h1>

                    <p className="text-[18px]  font-sans">
                        Fill in the registration data. It will take a couple of minutes. 
                        All you need is an email and a password
                    </p>
                </div>

                <div className="froInput">
                    <div className=" flex flex-col justify-between w-[100%] h-[222px]   ">

                        <div className="relative">

                            <Input 
                                className="w-[100%] h-[63px] pl-[10px] rounded-[6px] font-sans  bg-[#fff0] border-[1px] border-[#62F055] shadow-sm    focus:outline-1 outline-blue-600 placeholder-[#1c1a1a]"
                                placeholder="Email"
                                type="text"
                                disabled


                            />

                            <svg className="w-[20px] h-[20px] absolute top-6 right-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                                <path d="M19.5562 8.74032L18.1961 7.16071C17.9361 6.86078 17.7261 6.30092 17.7261 5.90102V4.20145C17.7261 3.14171 16.8561 2.27193 15.796 2.27193H14.0959C13.7059 2.27193 13.1358 2.06198 12.8358 1.80205L11.2557 0.442389C10.5657 -0.147463 9.43561 -0.147463 8.73556 0.442389L7.16543 1.81205C6.86541 2.06198 6.29538 2.27193 5.90535 2.27193H4.17525C3.11519 2.27193 2.24514 3.14171 2.24514 4.20145V5.91102C2.24514 6.30092 2.03512 6.86078 1.78511 7.16071L0.435026 8.75032C-0.145009 9.44015 -0.145009 10.5599 0.435026 11.2497L1.78511 12.8393C2.03512 13.1392 2.24514 13.6991 2.24514 14.089V15.7986C2.24514 16.8583 3.11519 17.7281 4.17525 17.7281H5.90535C6.29538 17.7281 6.86541 17.938 7.16543 18.198L8.74557 19.5576C9.43561 20.1475 10.5657 20.1475 11.2657 19.5576L12.8458 18.198C13.1458 17.938 13.7059 17.7281 14.1059 17.7281H15.806C16.8661 17.7281 17.7361 16.8583 17.7361 15.7986V14.099C17.7361 13.7091 17.9461 13.1392 18.2061 12.8393L19.5662 11.2597C20.1462 10.5699 20.1463 9.43015 19.5562 8.74032ZM14.1559 8.11048L9.3256 12.9393C9.18559 13.0792 8.99558 13.1592 8.79557 13.1592C8.59556 13.1592 8.40554 13.0792 8.26554 12.9393L5.84535 10.5199C5.55533 10.2299 5.55533 9.75007 5.84535 9.46014C6.13537 9.17021 6.6154 9.17021 6.90542 9.46014L8.79557 11.3497L13.0958 7.05073C13.3858 6.76081 13.8659 6.76081 14.1559 7.05073C14.4459 7.34066 14.4459 7.82054 14.1559 8.11048Z" fill="#08AD36"/>
                            </svg>
                            
                        </div>

                        
                        <div className="relative">

                            <Input 
                                className="w-[100%] h-[63px] pl-[10px] rounded-[6px] font-sans  bg-[#fff0] border-[1px]placeholder-[#8C8C8C]  border-[1px] border-[#8C8C8C]    focus:outline-1 outline-blue-600 placeholder-[#1c1a1a]"
                                placeholder="Password"
                                type={passwordType}
                                onChange={(e) => {setPassValue(e.target.value)}}
                            />

                            <svg onClick={showPassword} className="w-[20px] h-[20px] absolute top-6 right-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43763 2.60926L3.12129 2.29292C2.73077 1.9024 2.73077 1.26923 3.12129 0.878709C3.51182 0.488184 4.14498 0.488184 4.5355 0.878709L17.2634 13.6066C17.654 13.9972 17.654 14.6303 17.2634 15.0208C16.8729 15.4114 16.2397 15.4114 15.8492 15.0208L15.1806 14.3522C13.6578 15.2372 11.8881 15.744 10 15.744C5.18887 15.744 1.14622 12.4534 0 7.99997C0.552451 5.85352 1.77775 3.97721 3.43763 2.60926ZM13.7046 12.8762C12.5885 13.4317 11.3304 13.744 10 13.744C6.30519 13.744 3.1683 11.3353 2.08205 7.99997C2.59828 6.41484 3.57767 5.03904 4.85998 4.03161L6.64675 5.81838C6.23771 6.44582 6 7.19515 6 8C6 10.2091 7.79086 12 10 12C10.8049 12 11.5542 11.7623 12.1816 11.3532L13.7046 12.8762ZM10.7018 9.87341L8.12659 7.29822C8.04475 7.51658 8 7.75306 8 8C8 9.10457 8.89543 10 10 10C10.2469 10 10.4834 9.95525 10.7018 9.87341ZM10.5185 4.03329L13.9667 7.48154C13.7345 5.68704 12.313 4.26554 10.5185 4.03329ZM17.918 7.99997C17.65 8.82277 17.2572 9.58917 16.7621 10.2769L18.191 11.7059C19.0253 10.6207 19.6487 9.36493 20 7.99997C18.8538 3.54655 14.8111 0.255981 10 0.255981C9.00843 0.255981 8.0495 0.395755 7.14184 0.656675L8.82365 2.33849C9.208 2.28411 9.60074 2.25598 10 2.25598C13.6948 2.25598 16.8317 4.66459 17.918 7.99997Z" fill="#8C8C8C"/>
                            </svg>

                        </div>

                        <div className="relative">

                            <Input 
                                className="w-[100%] h-[63px] pl-[10px] rounded-[6px] font-sans  bg-[#fff0] border-[1px]placeholder-[#8C8C8C]  border-[1px] border-[#8C8C8C]    focus:outline-1 outline-blue-600 placeholder-[#1c1a1a]"
                                placeholder="Repeat the password"
                                type={repeatPasswordType}
                                onChange={(e) => {setConfirmPass(e.target.value)}}
                            />

                            <svg onClick={showRepeatPassword} className="absolute top-6 right-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43763 2.60926L3.12129 2.29292C2.73077 1.9024 2.73077 1.26923 3.12129 0.878709C3.51182 0.488184 4.14498 0.488184 4.5355 0.878709L17.2634 13.6066C17.654 13.9972 17.654 14.6303 17.2634 15.0208C16.8729 15.4114 16.2397 15.4114 15.8492 15.0208L15.1806 14.3522C13.6578 15.2372 11.8881 15.744 10 15.744C5.18887 15.744 1.14622 12.4534 0 7.99997C0.552451 5.85352 1.77775 3.97721 3.43763 2.60926ZM13.7046 12.8762C12.5885 13.4317 11.3304 13.744 10 13.744C6.30519 13.744 3.1683 11.3353 2.08205 7.99997C2.59828 6.41484 3.57767 5.03904 4.85998 4.03161L6.64675 5.81838C6.23771 6.44582 6 7.19515 6 8C6 10.2091 7.79086 12 10 12C10.8049 12 11.5542 11.7623 12.1816 11.3532L13.7046 12.8762ZM10.7018 9.87341L8.12659 7.29822C8.04475 7.51658 8 7.75306 8 8C8 9.10457 8.89543 10 10 10C10.2469 10 10.4834 9.95525 10.7018 9.87341ZM10.5185 4.03329L13.9667 7.48154C13.7345 5.68704 12.313 4.26554 10.5185 4.03329ZM17.918 7.99997C17.65 8.82277 17.2572 9.58917 16.7621 10.2769L18.191 11.7059C19.0253 10.6207 19.6487 9.36493 20 7.99997C18.8538 3.54655 14.8111 0.255981 10 0.255981C9.00843 0.255981 8.0495 0.395755 7.14184 0.656675L8.82365 2.33849C9.208 2.28411 9.60074 2.25598 10 2.25598C13.6948 2.25598 16.8317 4.66459 17.918 7.99997Z" fill="#8C8C8C"/>
                            </svg>
                        </div>

                    </div>

                </div>

                <div className="forInput ">

                    {
                        passValue.length >= 4 && confirmPass.length >= 4
                        ?
                        <Link to='dashboard'> 
                            <Button 
                                name="Registration"
                                className="w-[100%] h-[63px] bg-[#1565D8] text-white text-[20px] rounded-[5px]"
                                
                            />
                        </Link>
                        :
                            <Button 
                                name="Registration"
                                className="w-[100%] h-[63px] bg-[#1566d8c9] text-white text-[20px] rounded-[5px]"

                            />

                    }

                   
                </div>

                <div className=" w-[100%]  ">
                    <div className="w-[100%]  flex flex-row  justify-evenly  ">

                        <div className="icon w-[15px] h-[15px]   mt-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91683 4.95833H10.5002C11.1418 4.95833 11.6668 5.48333 11.6668 6.125V11.9583C11.6668 12.6 11.1418 13.125 10.5002 13.125H3.50016C2.8585 13.125 2.3335 12.6 2.3335 11.9583V6.125C2.3335 5.48333 2.8585 4.95833 3.50016 4.95833H4.0835V3.79167C4.0835 2.18167 5.39016 0.875 7.00016 0.875C8.61016 0.875 9.91683 2.18167 9.91683 3.79167V4.95833ZM7.00016 2.04167C6.03183 2.04167 5.25016 2.82333 5.25016 3.79167V4.95833H8.75016V3.79167C8.75016 2.82333 7.9685 2.04167 7.00016 2.04167ZM3.50016 11.9583V6.125H10.5002V11.9583H3.50016ZM8.16683 9.04167C8.16683 9.68333 7.64183 10.2083 7.00016 10.2083C6.3585 10.2083 5.8335 9.68333 5.8335 9.04167C5.8335 8.4 6.3585 7.875 7.00016 7.875C7.64183 7.875 8.16683 8.4 8.16683 9.04167Z" fill="#8692A6"/>
                            </svg>
                        </div>

                        <div className="w-[90%]">

                            <p className="text-[12px]">
                                     We take privacy issues seriously. You can be sure that your personal data is securely protected.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default RegistrationLast