/**
 * Create a signup component:
 * email
 * password
 * re-enter password
 */
import React, {FormEvent, useState} from "react";
import Input, {EInputTypes} from "../ui/input/Input";
import axios from "axios";


const Signup: React.FC = ():JSX.Element => {

    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [confirmPass, setConfirmPass] = useState<string>("")

    const handleSubmit = async (event: FormEvent) => {

        event.preventDefault()

        try {
            if (pass !== confirmPass) {
                alert("Passwords do not match")
                return;
            }
            const body = {
                email,
                pass
            }
            const result =
                await axios.post("http://localhost:8000/api/users/signup", body)
            console.log(`result status: ${result.status}, result data: ${result.data}`)
            // console.log('Dummy request sent')
        } catch (error: any) {
            console.error(`Error in ${handleSubmit.name}: ${error}`)
        }
    }

    return (
        <>
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>

                <Input
                    label={"Email:"}
                    inputType={EInputTypes.EMAIL}
                    inputId={"signup-email-id"}
                    value={email}
                    onChange={setEmail}
                />

                <Input
                    label={"Password:"}
                    inputType={EInputTypes.PASS}
                    inputId={"signup-pass-id"}
                    value={pass}
                    onChange={setPass}
                />

                <Input
                    label={"Confirm password:"}
                    inputType={EInputTypes.PASS}
                    inputId={"signup-confirm-pass-id"}
                    value={confirmPass}
                    onChange={setConfirmPass}
                />

                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}

export default Signup;