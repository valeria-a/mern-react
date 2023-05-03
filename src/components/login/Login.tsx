/**
 * Create a signup component:
 * email
 * password
 * re-enter password
 */
import React, {FormEvent, useState} from "react";
import Input, {EInputTypes} from "../ui/input/Input";
import axios from "axios";
import {ERoutes} from "../../enums/RouteEnums";

const {API_BASE_URL, USERS_PREFIX, LOGIN} = ERoutes
const LOGIN_URL = `${API_BASE_URL}${USERS_PREFIX}${LOGIN}`

const Login: React.FC = ():JSX.Element => {

    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    const handleSubmit = async (event: FormEvent) => {

        event.preventDefault()

        try {
            const body = {
                email,
                password: pass
            }
            console.log('sending body to login:', body)
            const result =
                await axios.post(LOGIN_URL, body)
            console.log(`result status: ${result.status}, result data: ${JSON.stringify(result.data)}`)
            // console.log('Dummy request sent')
        } catch (error: any) {
            console.error(`Error in ${handleSubmit.name}: ${error}`)
        }
    }

    return (
        <>
            <h1>LOGIN</h1>
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

                <button type={"submit"}>Login</button>
            </form>
        </>
    )
}

export default Login;