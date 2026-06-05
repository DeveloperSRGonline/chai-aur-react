import { useId, forwardRef } from "react"

const Select = ({
    options,
    label,
    className="",
    ...props
}, ref) => {

    const id = useId()
    return (
        <div className="select-div">
            {label && <label htmlFor={id} className={className || ""}>{label}</label>}
            <select 
            {...props}
            id={id}
            ref={ref}
            className={`${className} select`}
            >
                {options?options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                )): null}
            </select>
        </div>
    )
}

export default forwardRef(Select)