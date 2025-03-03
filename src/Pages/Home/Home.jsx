import React from 'react';
import Header from '../../Components/Header';
import Services from '../../Components/Services';
import CourseCategories from '../../Components/CourseCategories';
import PopularCourses from '../../Components/PopularCourses';
import LiveClassesLatestUpdates from '../../Components/LiveClassesLatestUpdates';
import Instructors from '../../Components/Instructors';
import StudentReviews from '../../Components/StudentReviews';
import FreeCoursesTrial from '../../Components/FreeCoursesTrial';
import SubscriptionPlans from '../../Components/SubscriptionPlans';
import FAQSupport from '../../Components/FAQSupport';
import NewsletterSubscription from '../../Components/NewsletterSubscription';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <CourseCategories></CourseCategories>
      <PopularCourses></PopularCourses>
      <FreeCoursesTrial></FreeCoursesTrial>
      <StudentReviews></StudentReviews>
      <FAQSupport></FAQSupport>
      <NewsletterSubscription></NewsletterSubscription>
    </div>
  );
};

export default Home;
