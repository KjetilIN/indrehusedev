import Project from "./project";

export default function ProjectsSection() {


    return (<section className="bg-white dark:bg-gray-900 mt-40 antialiased">
        <div className="min-w-full px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    My Projects
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    Crafted with curiosity and hunger for more knowledge. 
                </p>
            </div>

            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <Project company={"Start Gjøvik AS"} description={"Website for the student organisation."} link={"www.startgjovik.no"} projectTitle="Start Gjøvik Website"  />

                <Project company="Bekk" projectTitle="NAV Submission System" description="A intern project for NAV" link="#" />

                <Project company="NTNU" projectTitle="PROG2005 REST API" description="Course project for the PROG2005 course using Golang." link="#"  />

                
            </div>
        </div>
    </section>);
}