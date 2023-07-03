import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import project3 from '../../../assets/project3.png'

const Projects = () => {
    return (
        <div>
            <SectionTitle heading={"My Projects"}></SectionTitle>

            <div className='grid grid-cols-3 gap-4'>

                {/* Project 1 */}
                <div className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project1}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">Toy Land</h1>
                            <p className="text-gray-600 text-center mb-4">
                                Toy Marketplace Website
                            </p>
                            <p>
                                • Secure login system with email/password and Google sign-in.
                                • Home page with banner, toy gallery, and "Shop by Category" section.
                                • All Toys, Single Toy Details, Add A Toy, and My Toys pages for browsing, adding, and
                                managing user toys.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-4">
                                <a
                                    href="https://toyland-f61c7.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live Preview</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/toy-land-client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client Code</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/toy-land-server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server Code</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>



                {/* project 2 */}
                <div className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project2}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">Taste Tracker
                            </h1>
                            <p className="text-gray-600 text-center mb-4">
                                Chef Recipe Website
                            </p>
                            <p className="text-gray-600 text-center">
                                • Secure login system with email-password, Google Sign-In, and GitHub Sign-In.
                                • It includes a dedicated section for chefs, featuring a "View recipe" button that directs users to
                                the Chef Recipes page. This page showcases chef information along with their top 3 recipes.
                                • Users can interact with the recipes by using the favorite button, which triggers a toast
                                message to provide feedback on the action.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-4">
                                <a
                                    href="https://taste-tracker.web.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live Preview</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/taste-tracker-client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client Code</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/taste-tracker-server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server Code</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>



                {/* project 3 */}
                <div className="hover:shadow-xl border">
                    <div className=" p-4 rounded-lg">

                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src={project3}
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>


                        <div className="my-4">
                            <h1 className="text-3xl font-bold text-center mb-2">Graphic Design School</h1>
                            <p className="text-gray-600 text-center">
                                Online Graphic Design Learning Website
                            </p>
                            <p className="text-gray-600 text-center">
                                • Graphic School is a web app for learning graphic design with features like a navbar with
                                login/register options.
                                • A home page with a slide banner, instructor profiles, class listings, and a personalized
                                dashboard for users.
                            </p>
                        </div>
                        <hr />
                        <div className="my-4 text-center">
                            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
                            <div className="flex flex-wrap gap-2 text-center items-center justify-center">
                                <button className="badge bg-blue-700 text-white p-3">HTML</button>
                                <button className="badge bg-blue-700 text-white p-3">CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">Tailwind CSS</button>
                                <button className="badge bg-blue-700 text-white p-3">React</button>
                                <button className="badge bg-blue-700 text-white p-3">Node JS</button>
                                <button className="badge bg-blue-700 text-white p-3">Firebase</button>
                                <button className="badge bg-blue-700 text-white p-3">MongoDB</button>

                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className=" mx-auto flex justify-center items-center gap-4 my-10">
                            <div className="flex gap-4">
                                <a
                                    href="https://graphic-design-school.web.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLinkExternal className="text-2xl me-2" />
                                    <span>Live Preview</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/design-school-client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2 " />
                                    <span>Client Code</span>
                                </a>
                                <a
                                    href="https://github.com/AnonnaGH/Design_School_server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
                                >
                                    <BiLogoGithub className="text-2xl me-2" />
                                    <span>Server Code</span>
                                </a>
                            </div>
                        </div>


                    </div>



                </div>
            </div>

        </div>
    );
};

export default Projects;