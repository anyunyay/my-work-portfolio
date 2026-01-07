import { Head } from '@inertiajs/react';
import { FC } from 'react';

const Dashboard: FC = () => {
    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-100 p-4">
                {/* Grid Container */}
                <div className="grid grid-cols-5 grid-rows-5 gap-0 h-screen max-w-7xl mx-auto">
                    {/* div1 - spans from row 1-2, col 1-3 */}
                    <div className="col-start-1 col-end-4 row-start-1 row-end-3 bg-blue-500 rounded-lg shadow-lg p-6 m-1">
                        <h2 className="text-white text-2xl font-bold mb-4">Main Content Area</h2>
                        <p className="text-white">This is the main content section spanning 2 rows and 3 columns.</p>
                    </div>

                    {/* div2 - row 3, col 2 */}
                    <div className="col-start-2 col-end-3 row-start-3 row-end-4 bg-green-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 1</h3>
                    </div>

                    {/* div3 - row 3, col 3 */}
                    <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-yellow-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 2</h3>
                    </div>

                    {/* div4 - row 4, col 2 */}
                    <div className="col-start-2 col-end-3 row-start-4 row-end-5 bg-purple-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 3</h3>
                    </div>

                    {/* div5 - row 4, col 3 */}
                    <div className="col-start-3 col-end-4 row-start-4 row-end-5 bg-pink-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 4</h3>
                    </div>

                    {/* div6 - row 5, col 2 */}
                    <div className="col-start-2 col-end-3 row-start-5 row-end-6 bg-indigo-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 5</h3>
                    </div>

                    {/* div7 - row 5, col 3 */}
                    <div className="col-start-3 col-end-4 row-start-5 row-end-6 bg-red-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Card 6</h3>
                    </div>

                    {/* div8 - spans from row 1-3, col 4 */}
                    <div className="col-start-4 col-end-5 row-start-1 row-end-4 bg-teal-500 rounded-lg shadow-lg p-6 m-1">
                        <h2 className="text-white text-xl font-bold mb-4">Sidebar</h2>
                        <p className="text-white">This is a sidebar section spanning 3 rows.</p>
                    </div>

                    {/* div9 - row 4, col 4 */}
                    <div className="col-start-4 col-end-5 row-start-4 row-end-5 bg-orange-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Widget 1</h3>
                    </div>

                    {/* div10 - row 5, col 4 */}
                    <div className="col-start-4 col-end-5 row-start-5 row-end-6 bg-cyan-500 rounded-lg shadow-lg p-4 m-1">
                        <h3 className="text-white text-lg font-semibold">Widget 2</h3>
                    </div>

                    {/* div11 - spans from row 3-5, col 1 */}
                    <div className="col-start-1 col-end-2 row-start-3 row-end-6 bg-gray-600 rounded-lg shadow-lg p-6 m-1">
                        <h2 className="text-white text-xl font-bold mb-4">Navigation</h2>
                        <p className="text-white">This is a navigation section spanning 3 rows.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;