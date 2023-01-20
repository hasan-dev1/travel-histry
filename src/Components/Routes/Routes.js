import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashbordHome from '../Dashboard/DashboardHome/DashbordHome';
import DashboardLayout from '../Dashboard/DashboardLayout';
import MainLayout from '../MainLayout/MainLayout';
import Blogs from '../Pages/Blogs/Blogs';
import ComingSoon from '../Pages/ComingSoon';
import Home from '../Pages/Home/Home';
import Login from '../SharedPages/Athentication/Login';
import SignUp from '../SharedPages/Athentication/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/traveldeals",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/aboutus",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <DashbordHome></DashbordHome>,
          },
          {
            path: "/dashboard/main",
            element: <DashbordHome></DashbordHome>,
          },
          {
            path: "/dashboard/discover",
            element: <ComingSoon></ComingSoon>,
          },
          {
            path: "/dashboard/tickets",
            element: <ComingSoon></ComingSoon>,
          },
          {
            path: "/dashboard/favourits",
            element: <ComingSoon></ComingSoon>,
          },
          {
            path: "/dashboard/transaction",
            element: <ComingSoon></ComingSoon>,
          },
          {
            path: "/dashboard/setting",
            element: <ComingSoon></ComingSoon>,
          },
        ],
      },
    ],
  },
]);
export default router;