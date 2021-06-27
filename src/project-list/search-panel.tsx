import {useEffect} from "react";

const apiUrl = process.env.REACT_APP_API_URL

export const SearchPanel = () => {
    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async response => {
            if (response.ok) {
                console.log(response.json())
            }
        })
    }, [])
    return<>
        <input type="text"/>
        <select name="select" id="select">
            <option value="chargePerson">负责人</option>
        </select>
    </>
}