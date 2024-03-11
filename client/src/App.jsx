import NavHeader from "./components/NavHeader";
import PageFooter from "./components/PageFooter";
import React, {useState} from 'react';
import {Layout} from 'antd';
import './style/App.css';
import RouterConfig from './router/index';
import LoginForm from "./components/LoginForm";

const {Header, Content, Footer} = Layout;

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleLogin() {
        setIsModalOpen(true);
    }

    return (
        <div className="App">
            <Header className="header">
                <NavHeader handleLogin={handleLogin}/>
            </Header>
            <Content className="content">
                <RouterConfig/>
            </Content>
            <Footer className="footer">
                <PageFooter/>
            </Footer>
            <LoginForm isShow={isModalOpen} closeModal={closeModal}/>
        </div>
    );
}

export default App;
