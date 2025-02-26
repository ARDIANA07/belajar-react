import { useRef } from 'react';
import Project from '../component/Project';
const Home = () => {
    const refAbout = useRef(null);
    const refProject = useRef(null);
    const goToAbout = (ref) => {
        ref.scrollIntoView({
            top:ref.offsetTop,
            left:0,
            behavior: "smooth"
        });
    }
    const gotoProject = (ref) => {
        ref.scrollIntoView({
            top:ref.offsetTop,
            left:0,
            behavior: "smooth"
        });
    }
    return (
        <div >
            <nav className="shadow navbar sticky top-0 w-full z-50">
                <div className="flex justify-between align-items-center bg-gradient-to-r from-indigo-500 nav-menu">
                    <p className=" text-2xl  py-4 font-mono fw-bold px-3 hover:text-white">
                        My Portfolio
                    </p>
                    <div className="flex justify-between align-items-center   gap-4 px-3">
                        <p className="text-start text-sl py-7  menu ms-4" onClick={() => goToAbout(refAbout.current)}>About</p>
                        <p className="text-start text-sl py-7  menu" onClick={() => gotoProject(refProject.current)}>Project</p>
                        <p className="text-start text-sl py-7  menu me-4">Contact</p>
                    </div>
                </div>
            </nav>
            <div className=" my-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center body-content"
                ref={refAbout} >
                <div className="py-10 px-5 flex items-center justify-center">
                    <img className="px-3 image"
                        src="/asset/image/Ardi.png"
                        alt="Profile"/>
                    <div className="ml-6 text-start px-3 text-content">
                    <p className="text-5xl font-bold">
                        {Array.from("Ardiana Abdul Gumelar").map((char, index) => (
                            <span key={index}
                            className="hover:text-white cursor-pointer  transition-colors duration-300"
                            >{char}</span>
                        ))}
                        </p>
                        <p className="text-2xl">Full Stack Web Developer</p>
                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat consequatur deserunt totam maiores quo, dignissimos eius magnam doloribus excepturi optio, repudiandae ipsum reiciendis porro aperiam ea omnis libero provident! Voluptatum, commodi omnis? Et voluptate omnis distinctio provident at eaque minus voluptatibus adipisci voluptatum, autem dolor vitae sint unde earum reprehenderit a facilis sed, cum dolores quo ex vero error similique. Nostrum et laborum ad voluptatibus aliquam aspernatur ex dolorum aut quia possimus perferendis, cumque, voluptatem iste, voluptate soluta sit expedita explicabo nam. Optio officia laboriosam excepturi facere eum quidem corrupti, fugit animi nostrum, dolorem voluptatem aliquid eveniet libero quasi?</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 text-center h-screen body-content" ref={refProject}>
                <Project/>
            </div>
        </div>
    )
}

export default Home