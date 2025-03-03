import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Courses';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import LiveClassesLatestUpdates from '../Components/LiveClassesLatestUpdates';
import Instructors from '../Components/Instructors';
import BlogResourcesPage from '../Pages/BlogResourcesPage';
import StudentDashboard from '../Dasboard/StudentDashboard';
import Register from '../AuthPages/Register';
import Login from '../AuthPages/Login';
import SubscriptionPlans from '../Components/SubscriptionPlans';
import Contact from '../Pages/Contact';
import PaymentHistoryPage from '../Pages/PaymentHistoryPage';
import AdminDashboard from '../Pages/AdminDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },
      {
        path: '/details/:id',
        element: <CourseDetailsPage></CourseDetailsPage>,
      },
      {
        path: '/liveupdates',
        element: <LiveClassesLatestUpdates></LiveClassesLatestUpdates>,
      },
      {
        path: '/instractar',
        element: <Instructors></Instructors>,
      },
      {
        path: '/blogs',
        element: <BlogResourcesPage></BlogResourcesPage>,
      },
      {
        path: '/studentdashboard',
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/priceing',
        element: <SubscriptionPlans></SubscriptionPlans>,
      },
      {
        path: '/paymentHistory',
        element: <PaymentHistoryPage></PaymentHistoryPage>,
      },

      {
        path: '/admindashboard',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
