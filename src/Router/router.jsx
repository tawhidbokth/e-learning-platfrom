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
import Dashboard from '../Layout/Dashboard';
import WellcomePage from '../Dashboard/Components/WellcomePage';
import Students from '../Dashboard/Components/Students';
import AddCourses from '../Dashboard/Components/AddCourses';
import BlogPost from '../Dashboard/Components/BlogPost';
import MyCourse from '../Dashboard/Components/MyCourse';
import CategoryInput from '../Dashboard/Components/AddCategory';
import AddInstractor from '../Dashboard/Components/AddInstractor';
import FreeCourseManagement from '../Dashboard/Components/AddFreeCourse';
import PricingManagement from '../Dashboard/Components/PricingManagement';
import MyClass from '../Dashboard/StudentDashboard/Components/MyClass';
import PaymentHistory from '../Dashboard/StudentDashboard/Components/PaymentHistory';
import Profile from '../Dashboard/StudentDashboard/Components/Profile';

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

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: 'overveiw',
        element: <WellcomePage></WellcomePage>,
      },

      {
        path: 'students',
        element: <Students></Students>,
      },

      {
        path: 'addcourses',
        element: <AddCourses></AddCourses>,
      },

      {
        path: 'mycourses',
        element: <MyCourse></MyCourse>,
      },
      {
        path: 'blogpost',
        element: <BlogPost></BlogPost>,
      },
      {
        path: 'addcategory',
        element: <CategoryInput></CategoryInput>,
      },
      {
        path: 'instractor',
        element: <AddInstractor></AddInstractor>,
      },
      {
        path: 'freecourse',
        element: <FreeCourseManagement></FreeCourseManagement>,
      },
      {
        path: 'priceing',
        element: <PricingManagement></PricingManagement>,
      },
      {
        path: 'myclass',
        element: <MyClass></MyClass>,
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: 'profile',
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
