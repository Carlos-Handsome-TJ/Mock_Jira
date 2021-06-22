import {LoginModule} from "./login";
import {RegisterModule} from "./register";
import {useState} from "react";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <>
        {isRegister ? <RegisterModule/>: <LoginModule />}
        <button onClick={() => setIsRegister(!isRegister)}>{!isRegister ? "切换注册" : "切换到登录"}</button>
    </>
}