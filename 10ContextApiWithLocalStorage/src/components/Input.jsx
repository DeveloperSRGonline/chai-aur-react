import { useId } from "react"

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className="",
    ...props
},ref){

    const id = useId()
    return (
        <div className={`${className} input-div`}> 
            {label && <label 
            className="input-label"
            htmlFor={id}>
                {label}
            </label>}
            <input 
            type={type} 
            className={`${className} input-field`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input