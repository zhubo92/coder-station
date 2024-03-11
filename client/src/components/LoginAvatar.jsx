import React from 'react';
import {useSelector} from 'react-redux';
import {Avatar, Button, List, Popover, Image} from "antd";
import {UserOutlined} from '@ant-design/icons';
import styles from '../style/LoginAvatar.module.css'
// 用户头像，没登录的话，显示登录按钮
function LoginAvatar({handleLogin}) {
    const {isLogin, userInfo} = useSelector(state => state.user);

    let loginStatus = null;
    if(isLogin) {
        const content = (
            <List
                dataSource={['个人中心', '退出登录']}
                size="large"
                renderItem={(item) => {
                    return <List.Item style={{cursor: "point"}}>{item}</List.Item>
                }}
            />
        )

        loginStatus = (
            <Popover content={content} trigger="hover" placement="bottom">
                <div className={styles.avatarContainer}>
                    <Avatar src={<Image src={userInfo?.avatar} preview={false}/>} size="large" preview={false} icon={<UserOutlined />} />
                </div>
            </Popover>
        )
    } else {
        loginStatus = <Button type="primary" size="large" onClick={handleLogin}>注册/登录</Button>
    }

    return (
        <div>{loginStatus}</div>
    );
}

export default LoginAvatar;