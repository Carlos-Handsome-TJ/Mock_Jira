import {useHttp} from "../utils/http";
import {useEffect, useState} from "react";
import {User} from "../utils/auth-provider";
import {Form, Input, Select, Table} from "antd";

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
const SearchPanel = (props: listProps) => {
    const {users} = props
    return <Form>
        <Input type="text"/>
        <Select defaultValue={"chargePerson"}>
            <Select.Option value="chargePerson">负责人</Select.Option>
            {users.map(user => {
                return <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>
            })}
        </Select>
    </Form>
}

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
    /*
    {organization: "外卖组", ownerId: 2087569429, name: "高修文", id: 1}
    {personId: 4, organization: "外卖组", created: 1604989757139, ownerId: 2087569429, name: "骑手管理", …}
    */

    return <Table columns={columns} dataSource={tableData}/>
}
