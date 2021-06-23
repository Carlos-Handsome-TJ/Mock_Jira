import {log} from "util";

const localStorageKey = "__auth_provider_key__"
const apiUrl = process.env.REACT_APP_API_URL

/**
 *  定义登录、注册、登出函数、存储token等函数
 */

export interface User {
    id: number,
    name: string,
    token: string,
    organization: string,
    ownedId: number
}

const handleToken = ({user}: { user: User }) => {
    console.log(user.token)
    window.localStorage.setItem(localStorageKey, user.token || "")
    return user
}

export const login = (param: { username: string, password: string }) => {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    }).then(async response => {
        if (response.ok) {
            return handleToken(await response.json())
        } else {
            return Promise.reject(param)
        }
    })
}
export const register = (param: { username: string, password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    }).then(async response => {
        if (response.ok) {
            return handleToken(await response.json())
        } else {
            return Promise.reject(param)
        }
    })
}
export const logout = async () => window.localStorage.removeItem(localStorageKey)