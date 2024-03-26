import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

// =========Components==========//
import { Header, Footer, Loading, PreLoader } from "./components";

// =========Pages==========//
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Service = lazy(() => import("./pages/services"));
const ServiceDetails = lazy(() => import("./pages/services/service-details"));
const Contact = lazy(() => import("./pages/contact"));


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
          <Suspense fallback={<PreLoader/>}>
            <div className="w-full h-96 grid place-items-center text-center"><p className="animate-bounce text-primary text-5xl font-bold">page not found</p></div>
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<PreLoader/>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<PreLoader/>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<PreLoader/>}>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "/services/:title",
        element: (
          <Suspense fallback={<PreLoader/>}>
            <ServiceDetails />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<PreLoader/>}>
            <Contact />
          </Suspense>
        ),
      },
      
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Simulating data fetching with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 500); // Delay content visibility by 500 milliseconds to allow fade-out effect
    }
  }, [isLoading]);


  return (
    <>
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isContentVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouterProvider router={router}/>
        </motion.div>
      )}
    </div>
    </>
  )
}

export default App;
