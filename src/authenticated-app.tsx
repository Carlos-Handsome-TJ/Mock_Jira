import {ShowList} from "./project-list";
import {useAuth} from "./context/auth-context";

export const AuthenticatedApp = () => {
    const {user} = useAuth()
    console.log(user)
    return <>
        <div>欢迎{user?.name}来到新页面</div>
        <ShowList />
    </>
}