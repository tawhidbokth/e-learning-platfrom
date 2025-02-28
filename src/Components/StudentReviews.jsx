import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from 'react-rating';

const StudentReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://via.placeholder.com/100',
      course: 'JavaScript Mastery',
      rating: 5,
      review:
        'This course completely changed my career! The instructor explained everything so clearly, and the hands-on projects were incredibly helpful.',
    },
    {
      id: 2,
      name: 'Michael Brown',
      image: 'https://via.placeholder.com/100',
      course: 'UI/UX Design Fundamentals',
      rating: 4.5,
      review:
        'I learned so much about design principles and tools like Figma. Highly recommended for anyone interested in UI/UX design.',
    },
    {
      id: 3,
      name: 'Emily Davis',
      image: 'https://via.placeholder.com/100',
      course: 'Python for Beginners',
      rating: 4.8,
      review:
        'As a complete beginner, I found this course to be very beginner-friendly. The instructor was patient and supportive.',
    },
    {
      id: 4,
      name: 'David Wilson',
      image: 'https://via.placeholder.com/100',
      course: 'Digital Marketing 101',
      rating: 4.7,
      review:
        'This course gave me a solid foundation in digital marketing. I now feel confident managing campaigns and analyzing data.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Student Reviews</h2>
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className="px-2">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.course}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Rating
                    initialRating={review.rating}
                    readonly
                    emptySymbol={<span className="text-gray-300">☆</span>}
                    fullSymbol={<span className="text-yellow-500">★</span>}
                  />
                  <span className="ml-2 text-gray-600">({review.rating})</span>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StudentReviews;
