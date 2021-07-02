import {ShowList} from "./project-list";
import {useAuth} from "./context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
    const {user} = useAuth()
    return <StylePageContainer>
        <ShowList/>
    </StylePageContainer>
}
/*定义样式组件*/

const StylePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-areas: "";
`
const StyleHeader = styled.div`

`
const StyleMain = styled.div`

`