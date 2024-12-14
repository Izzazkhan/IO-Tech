import { Link } from 'react-router-dom'

export default function AboutPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="max-w-4xl mt-10 mx-auto bg-white shadow-lg rounded-lg p-6">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-blue-500"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
                        <p className="text-gray-600 mt-4">
                            Hi! I'm a passionate developer who enjoys building modern web applications. 
                            I specialize in creating dynamic, user-friendly interfaces using technologies 
                            like React, Next.js, and Tailwind CSS.
                        </p>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Highlights</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="bg-blue-500 text-white p-2 rounded-full mr-4">
                                ✅
                            </span>
                            <p className="text-gray-600">
                                Proficient in modern web development frameworks like Next.js and React.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-blue-500 text-white p-2 rounded-full mr-4">
                                ✅
                            </span>
                            <p className="text-gray-600">
                                Skilled in building responsive designs with Tailwind CSS.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-blue-500 text-white p-2 rounded-full mr-4">
                                ✅
                            </span>
                            <p className="text-gray-600">
                                Experienced in integrating APIs for dynamic, data-driven applications.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Go to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
}
