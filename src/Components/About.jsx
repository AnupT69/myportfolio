import PersonalPic from './PersonalPic.jpeg'; // Adjust the path accordingly

function About() {
    return(
        <section id="about" className="bg-gray-100"> {/* Added a class for light background */}
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {/* Changed text color for better visibility */}
                        Hi, I'm Anup.
                        <br className="hidden lg:inline-block" />I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-800"> {/* Changed text color for better visibility */}
                    I am a passionate software developer specializing in building scalable web applications using modern technologies like React and Spring Boot. With a keen interest in problem-solving, I aim to deliver efficient and innovative solutions.
                    When Im  not coding, I enjoy exploring new technologies, writing technical blogs, and playing chess to sharpen my analytical skills.


                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With me
                        </a>
                        <a
                            href="#skills"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Skills &amp; Technologies
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded" // Added rounded-full class for round image
                        alt="hero"
                        src={PersonalPic}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;