import NavHeader from "./components/NavHeader";
import PageFooter from "./components/PageFooter";
import React, {useEffect, useState} from 'react';
import {Layout, message} from 'antd';
import './style/App.css';
import RouterConfig from './router/index';
import LoginForm from "./components/LoginForm";
import {getInfoApi, getUserInfoByIdApi} from "./api/user";
import {useDispatch} from "react-redux";
import {changeLoginStatus, initUserInfo} from "./redux/userSlice";

const {Header, Content, Footer} = Layout;

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const {data, msg} = await getInfoApi();
            if(data) {
                const {data: _data}  = await getUserInfoByIdApi(data._id);
                dispatch(initUserInfo(_data));
                dispatch(changeLoginStatus(true));
            } else {
                message.warning(msg);
                localStorage.removeItem('userToken');
            }
        }
        if(localStorage.getItem('userToken') || sessionStorage.getItem('userToken')) {
            fetchData();
        }
    }, [dispatch]);



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
