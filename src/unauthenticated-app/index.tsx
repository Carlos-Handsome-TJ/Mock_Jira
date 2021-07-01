import React, {useState} from "react";
import {useAuth} from "../context/auth-context";
import {Form, Input, Button, Divider} from "antd";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg"
import left from "../assets/left.svg"
import right from "../assets/right.svg"

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (<StyleContainer>
        <StyleLogo/>
        <StyleLogin>
            <StyleH2>请登录</StyleH2>
            {isRegister ? <RegisterModule/> : <LoginModule/>}
            <Divider/>
            <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
                {!isRegister ? "没有账号？注册新账号" : "已经有账号了？直接登录"}
            </Button>
        </StyleLogin>
    </StyleContainer>)
}
/**
 * 登录模块
 * @constructor
 */
const LoginModule = () => {
    const {login} = useAuth()
    const handleSubmit = (value: { username: string, password: string }) => {
        login(value)
    }
    return <>
        <Form onFinish={handleSubmit}>
            <Form.Item name={"username"}>
                <Input placeholder={"用户名"}/>
            </Form.Item>
            <Form.Item name={"password"}>
                <Input.Password placeholder={"密码"}/>
            </Form.Item>
            <Form.Item>
                <StyleButton htmlType="submit">登录</StyleButton>
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
    const handleSubmit = (value: { username: string, password: string }) => {
        register(value)
    }
    return <>
        <Form onFinish={handleSubmit}>
            <Form.Item name={"username"}>
                <Input placeholder={"用户名"}/>
            </Form.Item>
            <Form.Item name={"password"}>
                <Input.Password placeholder={"密码"}/>
            </Form.Item>
            <Form.Item name={"confirm-password"}>
                <Input.Password placeholder={"确认密码"}/>
            </Form.Item>
            <Form.Item>
                <StyleButton htmlType="submit">注册</StyleButton>
            </Form.Item>
        </Form>
    </>
}

const StyleContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${left}) no-repeat left bottom, url(${right}) no-repeat right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;

`
const StyleLogo = styled.header`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  padding: 5rem;
  background: url(${logo}) no-repeat center center;
`
const StyleH2 = styled("h2")`
  text-align: center;
  margin-bottom: 2.4rem;
  font-weight: 500;
`
const StyleButton = styled(Button)`
  width: 100%;
  color: #fff;
  background-color: #2372d9;
  text-align: center;
`
const StyleLogin = styled.div`
  width: 40rem;
  height: 56rem;
  margin: 0 auto;
  padding: 3.2rem 4rem;
  border: .2rem rgba(0, 0, 0, .1) solid;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`
