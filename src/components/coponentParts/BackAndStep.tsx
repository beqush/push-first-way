type backAndStepProps = {
    back: string;
    step : string | number ;

}

const BackAndStep = (props: backAndStepProps) => {

    return(

        <div className="w-[100%] h-[20px] flex justify-between">

            <div className=" flex ">

                <svg className="mt-[4px]" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#8692A6"/>
                </svg>

                <p className=" font-serif text-[#8692A6] text-[16px]  ">
                    <a href="#">
                        {props.back}
                    </a>
                </p>
            </div>

            <div>

                <p className="  font-sans text-[#BDBDBD] text-[14px]">
                    STEP 1/3
                </p>
            </div>

        </div>
    )
}

export default BackAndStep