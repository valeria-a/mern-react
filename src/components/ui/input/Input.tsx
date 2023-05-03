export enum EInputTypes {
    EMAIL = 'email',
    PASS = 'password'
}

interface IInputProps {
    label: string;
    inputType: EInputTypes;
    inputId: string;
    value: string | number;
    onChange: Function;
    labelId?: string;
}

const Input = (props: IInputProps): JSX.Element => {

    const {label, inputType, inputId, value} = props

    return(
        <>
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                name={inputId}
                id={inputId}
                type={inputType}
                value={value}
                onChange={(event) => props.onChange(event.target.value)}/>
            <br/>
        </>
    )
}

export default Input;