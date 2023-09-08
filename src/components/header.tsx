import { Layout} from 'antd';

const { Header } = Layout;

export const AppHeader = () => {
    return (
        <Header style={{color: '#fff', opacity: 1, paddingInline: "60px"}}>
            <h1>Top News</h1>        
        </Header>
    )
    
}