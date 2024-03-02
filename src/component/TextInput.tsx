import React                                                    from 'react'
import ITextFieldCommonProps, { FieldSizes, TextFieldVariants } from "../interface/input.field";

interface ITextFieldProps extends ITextFieldCommonProps {
    onChange: Function
    onInput: Function
}

const TextField = ({onChange, onInput, ...props}: ITextFieldProps) => {

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement
        onChange(target.value)
    }

    const getInputClasses = () => {
        const classes = []
        if (props.variant !== TextFieldVariants.unstyled)
            classes.push('form-control')

        if (props.variant === TextFieldVariants.filled)
            classes.push('bg-light')

        if (props.error)
            classes.push('is-invalid')

        classes.push(`form-control-${FieldSizes[props.size]}`)

        return classes.join(' ')
    }

    const style: React.CSSProperties = {
        borderRadius: `${props.radius}px`,
    }

    return (
        <div className={props.className}>
            <label htmlFor={props.name}>
                {props.label}
                {props.required && <span className="text-danger ps-1">*</span>}
            </label>
            {props.description && <p><small className="text-secondary">{props.description}</small></p>}
            <div className="input-group has-validation">
                {props.text && <span className="input-group-text">{props.text}</span>}
                <input
                    {...props}
                    style={style}
                    className={props.className + ' ' + getInputClasses()}
                    onChange={handleChange}
                    onInput={handleChange}
                />
                {props.error && <div className="invalid-feedback">{props.error}</div>}
            </div>
        </div>
    )
}

export default TextField
