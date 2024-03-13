import request from './request';

/**
 * 评论相关接口
 */

// 获取某个问答的评论
export function getIssueCommentByIdApi(id, params) {
    return request({
        url: `/api/comment/issuecomment/${id}`,
        method: "GET",
        params
    })
}

// 提交评论
export function addCommentApi(data) {
    return request({
        url: `/api/comment`,
        method: "POST",
        data
    })
}