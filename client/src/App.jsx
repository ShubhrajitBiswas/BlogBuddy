import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./pages/admin/Layout";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import ListBlog from "./pages/admin/ListBlog";
import Login from "./components/admin/Login";
import 'quill/dist/quill.snow.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={true ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog/>} />
          <Route path="comments" element={<Comments/>} />
          <Route path="listblog" element={<ListBlog/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;