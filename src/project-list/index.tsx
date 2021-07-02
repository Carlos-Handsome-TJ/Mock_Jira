import {useHttp} from "../utils/http";
import {useEffect, useState} from "react";
import {User} from "../utils/auth-provider";
import {Form, Input, Select, Table} from "antd";
import {useTranslation} from "react-i18next";
import styled from "@emotion/styled";

interface listProps {
    users: User[]
    lists: User[]
}

export const ShowList = () => {
    const client = useHttp()
    const [users, setUsers] = useState([])
    const [lists, setLists] = useState([])
    useEffect(() => {
        client("users").then(setUsers)
        client("projects").then(setLists)
    }, [])
    return <>
        <SearchPanel users={users} lists={lists}/>
        <TableList users={users} lists={lists}/>
    </>
}
/**
 * 定义搜索框
 * @param props
 * @constructor
 */
const SearchPanel = (props: listProps) => {
    const {users} = props
    const {t} = useTranslation()
    return <Form>
        <Input type="text"/>
        <Select defaultValue={"chargePerson"}>
            <Select.Option value="chargePerson">{t("principal")}</Select.Option>
            {users.map(user => {
                return <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>
            })}
        </Select>
    </Form>
}

/**
 * 定义数据展示表格
 * @param props
 * @constructor
 */
const TableList = (props: listProps) => {
    const {users, lists} = props
    //定义表头
    const columns = [
        {
            title: '名称',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: '负责人',
            dataIndex: 'person',
            key: 'person',
        },
    ];
    //定义表格数据格式
    const tableData = lists?.map(project => {
        return {
            key: Math.random(),
            person: users.find(user => user.id === project.personId)?.name || "",
            projectName: project.name
        }
    })
    return <Table columns={columns} dataSource={tableData}/>
}