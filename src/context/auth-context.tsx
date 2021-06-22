import React, {ReactNode, useState} from "react"
import * as auth from "../auth-provider"

/**
 * 提供全局状态组件（user,token）
 */
interface FormData {
    username: string,
    password: string
}

const AuthContext = React.createContext<{
    user: auth.User | null,
    login: (param: FormData) => Promise<void>,
    register: (param :FormData) => Promise<void>,
    logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = "auth-context"
/**
 *将user状态赋值给组件
 * @constructor
 */
export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<auth.User | null>(null)
    const login = (param: FormData) => auth.login(param).then(setUser) /*pointFree 消去参数*/
    const register = (param :FormData) => auth.register(param).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))
    return <AuthContext.Provider children={children} value={{user, login, register, logout}} />
}

/**
 * 定义全局useAuth函数，context组件value中包含所需全局状态值
 */
export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        // eslint-disable-next-line no-throw-literal
        throw "useAuth只能在AuthContext组件中使用！"
    }else {
        return context
    }
}
