import request from './request';

/**
 * 用户相关的 api 都放在这里
 */

export function getCaptchaApi() {
    return request({
        url: "/res/captcha",
        method: "GET"
    })
}

export function userIsExistApi(loginId) {
    return request({
        url: `/api/user/userIsExist/${loginId}`,
        method: "GET"
    })
}

export function addUserApi(data) {
    return request({
        url: `/api/user`,
        method: "POST",
        data
    })
}

export function userLoginApi(data) {
    return request({
        url: `/api/user/login`,
        method: "POST",
        data
    })
}

export function getUserInfoByIdApi(id) {
    return request({
        url: `/api/user/${id}`,
        method: "GET"
    })
}