import React from 'react';
import {NavLink} from "react-router-dom";
import {Input, Select} from "antd";
import LoginAvatar from "./LoginAvatar";

const {Search} = Input;

const options = [
    {
        value: 'issues',
        label: '问答',
    },
    {
        value: 'books',
        label: '书籍',
    },
];

function NavHeader({handleLogin}) {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <div className="logo"></div>
            </div>
            <nav className="navContainer">
                <NavLink to="/" className="navgation">问答</NavLink>
                <NavLink to="/books" className="navgation">书籍</NavLink>
                <NavLink to="/interviews" className="navgation">面试题</NavLink>
                <a
                    href="https://duyi.ke.qq.com/"
                    className="navgation"
                    target="_blank"
                    rel="noreferrer"
                >视频教程</a>
            </nav>
            <div className="searchContainer">
                <Select
                    defaultValue="issues"
                    options={options}
                    size="large"
                    style={{width: "20%"}}
                />
                <Search
                    placeholder="请输入"
                    style={{width: '80%'}}
                    enterButton="搜索"
                    size="large"
                    allowClear
                    onSearch={onSearch}
                />
            </div>
            <div className="loginBtnContainer">
                <LoginAvatar handleLogin={handleLogin}/>
            </div>
        </div>
    );
}

export default NavHeader;