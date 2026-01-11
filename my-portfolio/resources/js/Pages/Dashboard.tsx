import { Head } from '@inertiajs/react';
import { FC } from 'react';

const Dashboard: FC = () => {
    return (
        <>
            <Head title="Dashboard" />

            <div
                className="min-h-screen bg-gray-100 p-4 md:p-8 border-2 border-black"
                style={{
                    backgroundImage: `
                        linear-gradient(to top, rgba(243, 244, 246, 1), rgba(243, 244, 246, 0.3)),
                        linear-gradient(to right, #929292ff 1px, transparent 1px),
                        linear-gradient(to bottom, #929292ff 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 30px 30px, 30px 30px'
                }}
            >

                {/* Grid Container - Using 6x5 grid with content filling most space */}
                <div className="grid grid-cols-6 grid-rows-5 gap-0 w-full h-[calc(100vh-4rem)]">
                    {/* Welcome & Portfolio Introduction */}
                    <div className="col-start-2 col-end-5 row-start-1 row-end-3 bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 m-1.5 flex flex-col border-2 border-black">
                        <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Welcome to My Portfolio</h1>
                        <h2 className="text-gray-600 text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">Full Stack Developer & Creative Problem Solver</h2>
                        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
                            Hello! I'm passionate about creating innovative digital solutions that make a difference.
                            With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Explore my projects, skills, and experience as we build something amazing together.
                        </p>
                    </div>

                    {/* Card 1 - centered */}
                    <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 1</h3>
                    </div>

                    {/* Card 2 - centered */}
                    <div className="col-start-4 col-end-5 row-start-3 row-end-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 2</h3>
                    </div>

                    {/* Card 3 - centered */}
                    <div className="col-start-3 col-end-4 row-start-4 row-end-5 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 3</h3>
                    </div>

                    {/* Card 4 - centered */}
                    <div className="col-start-4 col-end-5 row-start-4 row-end-5 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 4</h3>
                    </div>

                    {/* Card 5 - centered */}
                    <div className="col-start-3 col-end-4 row-start-5 row-end-6 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 5</h3>
                    </div>

                    {/* Card 6 - centered */}
                    <div className="col-start-4 col-end-5 row-start-5 row-end-6 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Card 6</h3>
                    </div>

                    {/* Tech Stack Sidebar */}
                    <div className="col-start-5 col-end-6 row-start-1 row-end-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 m-1.5 flex flex-col border-2 border-black">
                        <h2 className="text-black text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Tech Stack</h2>

                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                            <div>
                                <h3 className="text-gray-800 text-sm sm:text-base font-semibold mb-1 sm:mb-2">Frontend</h3>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">React</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">TypeScript</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Tailwind</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-800 text-sm sm:text-base font-semibold mb-1 sm:mb-2">Backend</h3>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Laravel</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">PHP</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Node.js</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-800 text-sm sm:text-base font-semibold mb-1 sm:mb-2">Database</h3>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">MySQL</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">PostgreSQL</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-800 text-sm sm:text-base font-semibold mb-1 sm:mb-2">Tools</h3>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Git</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Docker</span>
                                    <span className="bg-gray-100 text-black px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">Vite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Widget 1 - centered */}
                    <div className="col-start-5 col-end-6 row-start-4 row-end-5 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Widget 1</h3>
                    </div>

                    {/* Widget 2 - centered */}
                    <div className="col-start-5 col-end-6 row-start-5 row-end-6 bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 m-1.5 flex items-center justify-center border-2 border-black">
                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold text-center">Widget 2</h3>
                    </div>

                    {/* Contact Details */}
                    <div className="col-start-2 col-end-3 row-start-3 row-end-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 m-1.5 flex flex-col border-2 border-black">
                        <h2 className="text-black text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Let's Connect!</h2>
                        <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4">Ready to collaborate? I'd love to hear from you.</p>

                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Contact Details</h3>

                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                            <div className="flex flex-col">
                                <span className="text-gray-600 text-xs sm:text-sm font-medium">Email</span>
                                <a href="mailto:eti.tanya.le@gmail.com" className="text-black hover:text-gray-600 transition-colors break-all text-xs sm:text-sm">
                                    eti.tanya.le@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-600 text-xs sm:text-sm font-medium">Phone</span>
                                <a href="tel:[phone_number]" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm">
                                    [phone_number]
                                </a>
                            </div>
                        </div>

                        <h3 className="text-black text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 mt-3 sm:mt-4">Socials</h3>

                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="https://www.linkedin.com/in/tanya-leanne-eti-76b38736b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 text-center block"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/anyunyay"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 text-center block"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;