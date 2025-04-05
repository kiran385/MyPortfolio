import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';

const About = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F8F8] pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="sticky top-32">
                                <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-[400px] mx-auto">
                                    <img
                                        src="/assets//profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                <div className="bg-white rounded-2xl p-8 border border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                                                <FiUser className="text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Name</p>
                                                <p className="text-gray-900 mt-1">Kiran Baraiya</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                                                <FiMail className="text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Email</p>
                                                <p className="text-gray-900 mt-1">kiranbaraiya0308@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4">
                                                <FiMapPin className="text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Location</p>
                                                <p className="text-gray-900 mt-1">Botad, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        Hello! I'm Kiran Baraiya, a passionate software developer with a focus on creating elegant, efficient, and user-friendly solutions. With a background in Information Technology, I bring a unique perspective to every project I work on.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
                                <div className="space-y-8">
                                    <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#FFE8F7] before:rounded-full">
                                        <div className="text-gray-600 mb-2">May 2024 - June 2024</div>
                                        <h3 className="text-xl font-bold text-gray-900">Web Development Intern</h3>
                                        <p className="text-gray-600">CROWN Software</p>
                                        <p className="text-gray-600 mt-2">
                                            Started my professional journey building front-end interfaces and learning back-end technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;