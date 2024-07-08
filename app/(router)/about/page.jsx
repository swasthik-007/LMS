import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className=" text-4xl font-extrabold text-primary tracking-tight mb-4">About Our Learning Platform</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Welcome to our Learning Management System (LMS)! We are dedicated to providing an exceptional learning experience for students and educators alike.
                    </p>
                </div>

                <div className="mb-8 ">
                    <h2 className="text-2xl font-bold text-primary mb-4 flex justify-start" >Our Mission</h2>
                    <p className="text-lg text-gray-700 flex justify-start">
                        Our mission is to empower learners to achieve their full potential through accessible and innovative education solutions. We strive to create a supportive learning environment that fosters growth and success.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>Comprehensive course offerings covering diverse subjects and skill levels.</li>
                        <li>User-friendly interface designed for seamless navigation and accessibility.</li>
                        <li>Engaging learning materials including videos, quizzes, and interactive content.</li>
                        <li>Expert instructors committed to student success and learning outcomes.</li>
                        <li>Flexible learning options to accommodate diverse schedules and learning preferences.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-700">
                        Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:info@example.com" className="text-primary hover:underline">mohanty.swastik7008@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
