import React, { useEffect, useState, useRef } from 'react';
import {Tooltip} from "@mui/material";

export default function MyPortfolio() {
    const [activeSection, setActiveSection] = useState('about');
    const portRightRef = useRef(null);

    // Existing useEffect for animations
    useEffect(() => {
        // Create a new Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-animated', 'true');
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        const items = document.querySelectorAll('.experience_box, .initBoxesLeft, .initBoxesRight, .projects, .publications');
        items.forEach(item => {
            observer.observe(item);
        });

        const left = document.getElementsByClassName('initBoxesLeft');
        for (let i = 0; i < left.length; i++) {
            setTimeout(() => {
                left[i].classList.add('slide-in');
            }, i * 444); // Increase delay for each box
        }

        const right = document.getElementsByClassName('initBoxesRight');
        for (let i = 0; i < right.length; i++) {
            setTimeout(() => {
                right[i].classList.add('slide-in');
            }, i * 444); // Increase delay for each box
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!portRightRef.current) return;

            const scrollPosition = portRightRef.current.scrollTop;
            const sections = ['about', 'experience', 'projects', 'publications'];

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && scrollPosition >= element.offsetTop - 250) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        const portRightElement = portRightRef.current;
        if (portRightElement) {
            portRightElement.addEventListener('scroll', handleScroll);
            handleScroll(); // Call once to set initial active section
        }

        return () => {
            if (portRightElement) {
                portRightElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && portRightRef.current) {
            portRightRef.current.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const isActive = (section) => activeSection === section;


    return (
        <div id="portfolio" className="flex">
            {/* left */}
            <div id="portleft">
                <div className="initBoxesLeft text-left p-20 space-y-3">
                    {/* Name */}
                    <p className="mainfont text-4xl font-bold">Benson Cai</p>
                    <p className="mainfont text-2xl">New Grad Software Engineer</p>
                    {/*<p className="mainfont text-lg">I've dabbled in a bit of web development and other projects</p>*/}
                </div>
                <div id="checkpoints" className="flex flex-col p-20">
                    <button 
                        onClick={() => scrollToSection('about')}
                        className={`initBoxesLeft flex mainfont checkpoint ${isActive('about') ? 'font-extrabold text-blue-500' : ''}`}
                    > 
                        --- About Me
                    </button>
                    <button 
                        onClick={() => scrollToSection('experience')}
                        className={`initBoxesLeft flex mainfont checkpoint ${isActive('experience') ? 'font-extrabold text-blue-500' : ''}`}
                    > 
                        --- Experience
                    </button>
                    <button 
                        onClick={() => scrollToSection('projects')}
                        className={`initBoxesLeft flex mainfont checkpoint ${isActive('projects') ? 'font-extrabold text-blue-500' : ''}`}
                    > 
                        --- Projects
                    </button>
                    <button 
                        onClick={() => scrollToSection('publications')}
                        className={`initBoxesLeft flex mainfont checkpoint ${isActive('publications') ? 'font-extrabold text-blue-500' : ''}`}
                    > 
                        --- Upcoming Publications
                    </button>
                </div>
                <div className="initBoxesLeft flex justify-center space-x-4 mt-auto p-28">
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/benson-cai-762667200/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-2xl hover:text-blue-600 transition-colors"></i>
                    </a>
                    {/* Email Icon */}
                    <a href="mailto:bensonca@buffalo.edu">
                        <i className="fas fa-envelope text-2xl hover:text-red-600 transition-colors"></i>
                    </a>
                </div>
            </div>

            {/* right */}
            <div 
                id="portright" 
                className="w-1/2 overflow-y-auto h-screen" 
                ref={portRightRef}
            >
                {/* description */}
                <div id="about" className="p-20 pr-40 pt-40">
                    <p className="initBoxesRight font text-left border-b-2 border-blue-500">
                        I am a <strong className="under_score">recent Computer Science graduate</strong> from University at Buffalo,
                        class of May 2024, with a goal to be a full stack engineer.
                        <br/>
                        <br/>
                        During my time at school,
                        I gained hands-on experience with web development working
                        with the <strong className="under_score">SUNY Research Foundation</strong> and
                        <a href="https://cse.buffalo.edu/cubelab/" target="_blank" rel="noopener noreferrer">
                            <strong className="under_score"> <u>the cUBe Lab</u></strong>
                        </a>,
                        giving me experience making responsive and user-friendly applications
                        in form of web applications and other projects.
                        <br/>
                        <br/>
                        I am eager to apply my knowledge and learn in a dynamic tech environment.
                    </p>
                </div>
                {/* experience */}
                <div id="experience" className="pr-40 pt-20 pb-20">
                    <div className="experience_box w-full mb-10 font2">
                        <div className="flex px-2.5 w-1/4">
                            10/2023 - 08/2024
                        </div>
                        <div className="text-left flex flex-col w-3/4 font">
                            <strong className="under_score">Software Engineer & Web Developer</strong>
                            <Tooltip className="cursor-help mainfont" title="Computation and Equity Lab at UB for short" placement="right">
                                (cUBe Lab @ UB)
                            </Tooltip>
                            <ul className="list-disc">
                                <li>Developed and implemented a cutting-edge React web application to track interactions and navigation patterns of care coordinators,  resulting in a 30% increase in data accuracy and processing efficiency</li>
                                <li>Conducted in-depth analysis of user engagement metrics, identifying key patterns that directly informed treatment plan adjustments</li>
                                <li>Independently led project development and maintenance, managing code on GitHub and deployment on Amazon S3, ensuring consistent project quality and performance</li>
                                {/*<li>Personally maintaining the project on GitHub & S3</li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className="experience_box w-full mb-10">
                        <div className="flex w-1/4 px-2.5 font2">
                            07/2023 - 09/2023
                        </div>
                        <div className="text-left flex flex-col w-3/4 font">
                            <strong className="under_score">Software Engineer</strong>
                            <Tooltip className="cursor-help mainfont" title="Computation and Equity Lab at UB for short" placement="right">
                                (cUBe Lab @ UB)
                            </Tooltip>
                            <ul className="list-disc">
                                <li>Optimized the data scraping process by rewriting the existing scraper, resulting in a 40% increase in efficiency and reducing processing time by 25%</li>
                                <li>Implemented error handling mechanisms within the scraper code to ensure accurate data extraction from each profile, reducing errors by 80%</li>
                                <li>Enhanced the scraper's architecture, leading to more modular and maintainable code, which facilitated easier updates and future improvements</li>
                                {/*<li>The project is maintained on Github and is used during bi-weekly stand-up meetings to collaborate and stay on task</li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="experience_box w-full mb-10">
                        <div className="flex w-1/4 px-2.5  font2">
                            05/2022 - 08/2022
                        </div>
                        <div className="text-left flex flex-col w-3/4 font">
                            <strong className="under_score">Research Programmer</strong>
                                <p className="mainfont">(SUNY Research Foundation)</p>
                            <ul className="list-disc">
                                <li>Designed and launched an innovative web application that supports qualitative analysis and streamlining data retrieval processes</li>
                                <li>This allows the researchers to explore and filter out data as they research various social issues using tweets regarding that issue. The webapp utilizes UMAP clustering to create scatter plots that group users based on relevant features</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience_box w-full mb-10">
                        <div className="flex w-1/4 px-2.5 font2">
                            08/2021 - 12/2023
                            <br/>
                            (Every Fall)
                        </div>
                        <div className="text-left flex flex-col w-3/4 font">
                            <strong className="under_score">Teaching Assistant</strong>
                                <p className="mainfont">University at Buffalo</p>
                            <ul className="list-disc">
                                <li>Facilitated engaging recitations for a cohort of 25 students within a 600-student introductory computer science seminar course (CSE199), covering 7 fundamental topics over the course of each semester, with a new topic introduced every 2 weeks</li>
                                <li>Aided students in activities related to different topics covering the basics of computer science</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="projects" className="p-20 pr-40 text-center font">
                    <div className="text-2xl mb-5">
                        <div className="border-b-2 border-blue-500">
                            Projects
                        </div>
                    </div>
                    <div className="projects mb-10">
                        <div className="text-xl mb-2 italic mainfont">
                            Foster Care Stage 1
                            <a href="https://github.com/BensonCai/foster-care-website" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>GitHub</u></strong>
                            </a>
                        </div>
                        <div className="subtext">
                            I developed this website to simulate a typical treatment planning process for children
                            in therapeutic foster care, a process typically handled by care coordinators.
                            <br/>
                            This tool was created to support
                            <a href="https://www.linkedin.com/in/connor-wurst-6a0416129/" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>Connor Wurst</u></strong>
                            </a>
                            , who is currently pursuing his PhD in Human Factors and Ergonomics, for use in his dissertation.
                        </div>
                    </div>
                    <div className="projects mb-10">
                        <div className="text-xl mb-2 italic mainfont">
                            Foster Care Stage 2
                            <Tooltip className="cursor-help" title="Due to the project currently being in a private repo, I'll try to describe it in detail" placement="right">
                                &nbsp;(?)
                            </Tooltip>
                            <a href="https://github.com/BensonCai/foster-care-stage2" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>GitHub</u></strong>
                            </a>
                        </div>
                        <div>
                            Similar to the first stage, I developed a second application aimed at understanding the
                            processes care practitioners use when creating treatment plans for youth who have recently entered therapeutic foster care.
                            <br/>
                            This tool was also created to support
                            <a href="https://www.linkedin.com/in/connor-wurst-6a0416129/" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>Connor Wurst</u> </strong>
                            </a>
                        </div>
                    </div>
                    <div className="projects mb-10">
                        <div className="text-xl mb-2 italic mainfont">
                            NLP-Webapp
                            <Tooltip className="cursor-help" title="Due to the project currently being in a private repo, I'll try to describe it in detail" placement="right">
                                &nbsp;(?)
                            </Tooltip>
                            <a href="https://github.com/Ykelkar2/NLP-Webapp" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>GitHub</u></strong>
                            </a>
                        </div>
                        <div>
                            I contributed to the design and launch of a web application that facilitated qualitative analysis and streamlined data retrieval.
                            The platform enabled researchers to explore and filter data from tweets to study various social issues.
                            <br/>
                            I was working with
                            <a href="https://www.linkedin.com/in/kenneth-joseph-96ab78b6/" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>Kenneth Joseph</u> </strong>
                            </a>
                            at the time
                        </div>
                    </div>
                    <div className="projects mb-20">
                        <div className="text-xl mb-2 italic mainfont">
                            RoomAid
                            <a href="https://github.com/cse442-at-ub/project_s23-php-haters?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                                <strong className="under_score"> <u>GitHub</u></strong>
                            </a>
                        </div>
                        <div>
                            While still in school, I collaborated with a team of five to develop a web application designed to help
                            individuals with roommates maintain a more organized and well-tracked living environment.
                            It may not look perfect, but it gets the job done :)
                        </div>
                    </div>
                </div>
                <div id="publications" className="p-20 pr-40 text-center font mb-48">
                    <div className="text-2xl mb-5">
                        <div className="border-b-2 border-blue-500 mb-5">
                            Publications
                        </div>
                        <div className="publications font text-left mb-10 text-base">
                            Title of Dissertation: Unsure <br/>
                            Author: Connor Wurst <br/>
                            Contribution: Acknowledged for support in research and development. <br/>
                            Year: 2025 <br/>
                        </div>
                        <div className="publications font text-left mb-10 text-base">
                            Title: Justice in Child Welfare Policy: Towards the Development of a Contextual Ethics Framework for Deployment of AI in Human Service Systems <br/>
                            Author(s): Benson Cai, Maria Rodriguez, Seventy Hall, Kenneth Joseph, Ahana Bhattacharya, Hannah Wilcox, and Connor Wurst <br/>
                            Contribution: Acknowledged for support in research and development & Qualitative Analysis <br/>
                            Status: Under Review <br/>
                            Year: 2025 <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
