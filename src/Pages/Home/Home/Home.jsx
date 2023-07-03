import BackToTop from "../../../Shared/BackToTop/BackToTop";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkills from "../MySkills/MySkills";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;