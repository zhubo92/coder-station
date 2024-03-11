import axios from 'axios';

const service = axios.create({
    timeout: 5000
});

service.interceptors.request.use(config => {
    return config;
}, error => {
    console.log("请求拦截出错，错误信息：", error);
});

service.interceptors.response.use(res => {
    return res.data;
}, error => {
    console.log("相应拦截出错，错误信息：", error);
})

export default service;
