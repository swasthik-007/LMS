'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const BeAnInstructorPage = () => {
    const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(hi);
        router.push('/submitted')
        // Handle form submission logic here
        // For example, send data to backend or process it locally
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-start justify-center mt-2  py-6">
            <form
                className="bg-white shadow-md rounded-lg px-8 py-8 max-w-lg w-full mx-4 md:mx-auto"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-extrabold text-primary mb-4 text-center">Become an Instructor</h1>

                <p className="text-lg text-gray-700 mb-8 text-center">
                    Teach what you love. Join our platform and share your expertise with learners around the
                    world.
                </p>

                {/* Instructor Information Form */}
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Your Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Your Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="expertise"
                    >
                        Your Expertise (e.g., Subject Area)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="expertise"
                        type="text"
                        placeholder="Your Expertise"
                        required
                    />
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <button
                        className="bg-primary hover:bg-red-900  text-white py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BeAnInstructorPage;