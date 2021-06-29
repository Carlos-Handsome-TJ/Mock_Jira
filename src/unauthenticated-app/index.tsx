import React, {useState} from "react";
import {useAuth} from "../context/auth-context";
import {Form, Input, Button} from "antd";


export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <>
        {isRegister ? <RegisterModule/>: <LoginModule />}
        <Button onClick={() => setIsRegister(!isRegister)}>{!isRegister ? "切换注册" : "切换到登录"}</Button>
    </>
}
/**
 * 登录模块
 * @constructor
 */
const LoginModule = () => {
    const {login} = useAuth()
    const handleSubmit = (value:{username:string, password:string}) => {
        login(value)
    }
    return <>
        <Form onFinish={handleSubmit}>
            <Form.Item label={"用户名"} name={"username"}>
                <Input />
            </Form.Item>
            <Form.Item label={"密码"} name={"password"}>
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    </>
}
/**
 * 注册模块
 * @constructor
 */
const RegisterModule = () => {
    const {register} = useAuth()
    const handleSubmit = (value: {username: string, password: string}) => {
        register(value)
    }
    return<>
        <Form onFinish={handleSubmit}>
            <Form.Item label={"用户名"} name={"username"}>
                <Input />
            </Form.Item>
            <Form.Item label={"密码"} name={"password"}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">注册</Button>
            </Form.Item>
        </Form>
    </>
}