import Issues from '../pages/Issues';
import Books from '../pages/Books';
import Interviews from '../pages/Interviews';
import {Route, Routes, Navigate} from "react-router-dom";
import AddIssue from "../pages/AddIssue";
import IssueDetail from "../pages/IssueDetail";

function RouteConfig() {
    return (
        <Routes>
            <Route path="/addIssue" element={<AddIssue/>}/>
            <Route path="/issueDetail/:id" element={<IssueDetail/>}/>
            <Route path="/issues" element={<Issues/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/interviews" element={<Interviews/>}/>
            <Route path="/" element={<Navigate replace to="/issues"/>}/>
        </Routes>
    )
}

export default RouteConfig;
