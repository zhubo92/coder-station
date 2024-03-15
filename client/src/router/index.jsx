import {Route, Routes, Navigate} from "react-router-dom";
import Issues from '../pages/Issues';
import Books from '../pages/Books';
import Interviews from '../pages/Interviews';
import AddIssue from "../pages/AddIssue";
import IssueDetail from "../pages/IssueDetail";
import BookDetail from "../pages/BookDetail";
import Search from "../pages/Search";
import PersonalCenter from "../pages/PersonalCenter";

function RouteConfig() {
    return (
        <Routes>
            <Route path="/personalCenter" element={<PersonalCenter/>}/>
            <Route path="/interviews" element={<Interviews/>}/>
            <Route path="/search" element={<Search />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/books" element={<Books/>}/>
            <Route path="/addIssue" element={<AddIssue/>}/>
            <Route path="/issueDetail/:id" element={<IssueDetail/>}/>
            <Route path="/issues" element={<Issues/>}/>
            <Route path="/" element={<Navigate replace to="/issues"/>}/>
        </Routes>
    )
}

export default RouteConfig;
