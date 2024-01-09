
type inputProps = {

    placeholder ?: string ;
    className ?: string;
    onChange ?: React.ChangeEventHandler<HTMLInputElement> | undefined
    type : string;
    disabled ?: boolean | undefined
}

const Input = (props: inputProps) => {


    return(
        <div>
            <input 

                className={props.className}
                type={props.type} 
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            />
        </div>
    )
}

export default Input