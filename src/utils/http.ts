import qs from "qs"
import * as auth from "./auth-provider"
import {useAuth} from "../context/auth-context";
import {useCallback} from "react";

const apiUrl = process.env.REACT_APP_API_URL


interface Config extends RequestInit {
    data?: object,
    token?: string
}

/**
 * 对HTTP请求进行封装处理
 * @param endpoint
 * @param data
 * @param token
 * @param headers
 * @param customConfig
 */
export const http = (endpoint: string, {data, token, headers, ...customConfig}: Config = {}) => {
    const config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": data ? "application/json" : ""
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === "GET") {
        endpoint += qs.stringify(data)
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
        //对状态异常进行处理
        if (response.status === 401) {
            await auth.logout()
            window.location.reload()
            return Promise.reject({"message": "用户未登录！"})
        } else {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                //抛出异常数据
                return Promise.reject(data)
            }
        }
    })
}
/***
 * 使用自定义狗子函数，必须得自带钩子函数，
 */
export const useHttp = (endpoint: string) => {
    const {user} = useAuth()
    return (...[endpoint, config]: Parameters<typeof http>) => {
        http(endpoint, {...config, token: user?.token || ""})
    }
}