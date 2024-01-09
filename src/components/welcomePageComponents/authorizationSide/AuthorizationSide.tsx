import Authorization from "./authorizationRegistration/Authorization"
import Registration from "./authorizationRegistration/Registration"
import RegistrationLast from "./authorizationRegistration/RegistrationLast"
import Reset from "./authorizationRegistration/Reset"
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";


const AuthorizationSide = () => {

    return(

        <div className="w-[40%] h-[100vh] rounded-l-[25px] flex justify-center    " >
            
       

            {/* done */}
                {/* <Authorization /> */}
                {/* <Route path='/authorization' index element={<Authorization /> } /> */}
                {/* <Route path="reset" element={<Reset />} /> */}
                

                <Routes >

                    <Route path="/"  element={<Authorization />} />
                    <Route path='reset'  element={<Reset/>} />
                    <Route path="/registration"  element={<Registration/>} />
                    <Route path="/registrationlast" element={<RegistrationLast />} />
                    
            {/* sssds */}
            {/* ssssssssssssss */}

            {/* sds assasadssadsasdsssdsds*/}
            {/* dss */}
                </Routes>

                
            
            {/* done */}
                {/* <Reset /> */}

                {/* <Registration /> */}

                {/* <RegistrationLast /> */}

        </div>
        
    )
}

export default AuthorizationSide