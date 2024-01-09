import Dashboard from "./dashboard/Dashboard"
import WelcomePage from "./welcomePageComponents/WelcomePage"
import {Link ,Routes , Route} from 'react-router-dom'
import Cover from "./welcomePageComponents/imgBackgroundSide/Cover"
import AuthorizationSide from "./welcomePageComponents/authorizationSide/AuthorizationSide"

const Login = () => {

    return (
        <div>


            
            {/* if User remember logined  */}

            {/* here will be <Dashboard /> */}

            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>


            {/* if user not remember logined  */}

            {/* <Routes>

                <Route path="/"   element={<WelcomePage />} /> 
                
                        
            </Routes> */}
                       

            <WelcomePage />
            {/* ssds */}

        </div> 

    )
}
export default Login