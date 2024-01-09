import { Route, Routes } from "react-router-dom"
import AuthorizationSide from "./authorizationSide/AuthorizationSide"
import Cover from "./imgBackgroundSide/Cover"

const WelcomePage = () => {

    return(
        <div className=" flex ">


            {/* if you want another background , you can import here another component */}
            {/* <Routes>
                <Route  index element={<Cover/>} />
            </Routes> */}

            <Cover/>

            <AuthorizationSide />


            {/* <Routes>
                <Route index element={<AuthorizationSide />}/>
            </Routes> */}

        </div>
    )
}

export default WelcomePage