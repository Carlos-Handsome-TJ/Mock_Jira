import {useAuth} from "./context/auth-context";

export const AuthenticatedApp = () => {
    const {user} = useAuth()
    console.log(user, user?.name)
    return <>
        <div>欢迎{}来到新页面</div>
    </>
}