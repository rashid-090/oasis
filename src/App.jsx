import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

// =========Components==========//
import { Header, Footer, Loading } from "./components";

// =========Pages==========//
const Home = lazy(() => import("./pages/home"));


const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="min-h-screen flex flex-col justify-between">
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading/>}>
            <div className="w-full h-96 grid place-items-center text-center"><p className="animate-bounce text-red-600 text-5xl font-bold">page not found</p></div>
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading/>}>
            <Home />
          </Suspense>
        ),
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
