import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>
                {/* hero part start  */}
                <div className="bg-indigo-800 p-10 ">
                    <div className="bg-white text-black shadow rounded-3xl  ">
                        <div className="hero   ">
                            <div className="hero-content text-center ">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">All Comprehensive Solution in one Platform</h1>
                                    <p className="py-6">Our encryption solutions ensure that your data is protected, whether it's in transit or at rest. We implement encryption protocols that meet or exceed industry standards.</p>
                                    <div className="text-white">
                                        <button className="btn   rounded-3xl">Get In Touch</button>
                                        <button className="btn btn-outline ml-7 rounded-3xl ">Explore More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* hero part end  */}
                {/* Collaborated Companies part start  */}
                <div className="p-10 bg-white">
                    <div className="text-center">
                        <h1 className="text-black text-3xl font-bold py-8">More than 3000+ companies trusted us and collaborated with us</h1>
                        <div className="  ">
                            <div className="grid grid-rows grid-flow-col gap-4 ">
                                <a href=""><img src="https://i.ibb.co/2qN6FqH/logo-7.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/4tjcG09/logo-8.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/Q8z69F6/logo-9.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/NTCMDyj/logo-10.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/DkrwH5K/logo-11.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/Fz0j3yb/logo-1.png" alt="" /></a>
                            </div>
                            <div className="grid grid-rows grid-flow-col gap-4 ">
                                <a href=""><img src="https://i.ibb.co/CKY5Qjz/logo-2.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/ZT3W4KB/logo-3.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/j896DH7/logo-4.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/MDcgP8w/logo-5.png" alt="" /></a>
                                <a href=""><img src="https://i.ibb.co/WV1dQZS/logo-6.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className=" border mt-10 "></div>
                </div>
                {/* Collaborated Companies part end  */}
                {/* Why Choose part Start  */}
                <div className="  px-10 py-10 text-black bg-white ">
                    <div className="  flex   ">
                        <div className=" w-2/3">
                            <h1 className="text-3xl"><a href=" ">WHY CHOOSE US</a></h1>
                            <h1 className="text-6xl font-bold">Leading the Way in Software Design <br /> and Development</h1>
                        </div>
                        <div className=" w-2/6">
                            <p className="py-6 text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                    <div className="py-10 flex gap-4">
                        <div className=" card-compact    ">
                            <div className="text-start pl-10 px-10 w-full">
                                <figure ><img src="https://gossip-themes.com/techogy/wp-content/uploads/2023/12/cost-icon.svg" alt=" " /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold py-8">Cost Effectiveness</h2>
                                <p className="text-3xl">We offer affordable IT solutions that help you reduce costs and improve your bottom line. Cost effectiveness solution maximizing Value Without Compromising Quality.</p>
                            </div>
                        </div>
                        <div className=" card-compact  ">
                            <div className="text-start pl-10 px-10 w-full">
                                <figure ><img src="https://gossip-themes.com/techogy/wp-content/uploads/2023/12/light-icon.svg" alt=" " /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold py-8">Innovative Technology</h2>
                                <p className="text-3xl">We always stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition every time.</p>
                            </div>
                        </div>
                        <div className=" card-compact   ">
                            <div className="text-start pl-10 px-10 w-full">
                                <figure ><img src="https://gossip-themes.com/techogy/wp-content/uploads/2023/12/doc-icon.svg" alt=" " /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold py-8">Industry expertise</h2>
                                <p className="text-3xl">We specialize in serving specific industries, such as healthcare, finance, manufacturing, and offer tailored solutions that meet your unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <img className="items-center w-full rounded-3xl" src="https://gossip-themes.com/techogy/wp-content/uploads/2023/12/video-bg.png" alt="" />
                    </div>
                </div>

                {/* Why Choose part end  */}



























            </div>
        </>
    );
};

export default Home;