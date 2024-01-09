

type buttonProps  = {

    name : string ;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className : string ;
    disabled ?: boolean | undefined;
    active ?: any;

}

const Button = (props : buttonProps) => {

    return(

        <div >

                    <button 
                        disabled={props.disabled}
                        
                        className={props.className}
                        onClick={props.onClick}

                    >
                        {props.name} 
                    </button>

        </div>
    )
}

export default Button