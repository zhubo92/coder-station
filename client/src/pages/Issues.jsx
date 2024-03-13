import React, {useEffect, useState} from 'react';
import PageHeader from "../components/PageHeader";
import styles from '../style/Issue.module.css';
import {getIssueByPageApi} from "../api/issue";
import {message, Pagination} from "antd";
import IssueItem from "../components/IssueItem";
import AddIssue from "../components/AddIssue";
import Recommend from "../components/Recommend";
import ScoreRank from "../components/ScoreRank";

function Issues() {
    const [list, setList] = useState([]);
    const [params, setParams] = useState({
        current: 1,
        pageSize: 15,
        total: 0
    });

    useEffect(() => {
        async function fetchData(current, pageSize) {
            const {code, data, msg} = await getIssueByPageApi({
                current,
                pageSize,
                issueStatus: true
            });
            if (code === 0) {
                setList(data.data);
                setParams({
                    ...params,
                    total: data.count
                })
            } else {
                message.warning(msg);
            }
        }

        fetchData(params.current, params.pageSize);
    }, [params.current, params.pageSize]);

    function onChange(page, pageSize) {
        setParams({
            ...params,
            current: page,
            pageSize
        })
    }

    const IssueList = list.map(item => (
        <IssueItem key={item._id} item={item}/>
    ))

    return (
        <div className={styles.container}>
            <PageHeader title="问答列表"/>
            {/* 下面的列表内容 */}
            <div className={styles.issueContainer}>
                <div className={styles.leftSide}>
                    {IssueList}
                    <div className="paginationContainer">
                        <Pagination
                            {...params}
                            showTotal={(total, range) => `第 ${range[0]}-${range[1]} 项（共 ${total} 项）`}
                            defaultCurrent={1}
                            pageSizeOptions={['10', '15', '20']}
                            showSizeChanger
                            showQuickJumper
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <AddIssue/>
                    <Recommend/>
                    <ScoreRank/>
                </div>
            </div>
        </div>
    );
}

export default Issues;