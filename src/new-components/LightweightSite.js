import React, { useState, useCallback } from "react";
import "./LightweightSite.css";

export default function LightweightSite() {

    const [page, setPage] = useState(PAGE_NUMBER_PERSONAL());

    const setPageNumber = (pageNumber) => { setPage(pageNumber); };

    return <div className="_site">
        <Header />
        <Toolbar setPage={setPageNumber}/>
        <Page page={page}/>
    </div>;
};

const Header = () => {
    return <div className="_headingContainer">
        <h1 className="_heading">Randall Kent Brown Jr.</h1>
        <h2 className="_heading">Madison, WI</h2>
    </div>;
};

const Toolbar = (props) => {

    const setPage = props.setPage;

    const personalPageNumber = PAGE_NUMBER_PERSONAL();
    const professionalPageNumber = PAGE_NUMBER_PROFESSIONAL();

    const switchToPersonalPage = useCallback(() => { setPage(personalPageNumber); }, [setPage, personalPageNumber]);
    const switchToProfessionalPage = useCallback(() => { setPage(professionalPageNumber); }, [setPage, professionalPageNumber]);

    return <nav className="_toolbar">
        <button className="_toolbarButton" onClick={switchToPersonalPage}>Personal</button>
        <button className="_toolbarButton" onClick={switchToProfessionalPage}>Professional</button>
    </nav>
};

const Page = (props) => {

    const page = props.page;
    let content = "";

    switch(page) {
        case PAGE_NUMBER_PERSONAL():
            content = <PersonalPage />;
            break;
        case PAGE_NUMBER_PROFESSIONAL():
            content = <ProfessionalPage />;
            break;
        default:
            content = "Hey... how'd you get here?";
            break;
    }

    return <div className="_page">{content}</div>
};
  
const PersonalPage = () => {
    return <>
        <h3>About Me</h3>
        <p>
            Hello, I'm Kent! I'm a software engineer with a passion for education and environmentalism! I currently live in Madison, Wisconsin,
            where I moved after graduating from Rochester Institute of Technology, in Rochester, NY in 2021. I've lived all over the country and
            been lucky enough to visit places around the world while growing up in an Army family.
        </p>
        <p>
            I enjoy playing volleyball, skiing, running, and both video games and tabletop games - but most of all, spending time with my beautiful
            girlfriend Carly and my wonderful friends.
        </p>
        <h3>Charlie Brown's Tree Farm</h3>
        <p>
            My family are the proud owners of a beautiful Christmas Tree Farm in Milford, New Jersey, on the border near Pennsylvania.
            If you're ever in the area, or just curious about our business, please feel free to visit our site,
            at <a href="https://charliebrownschristmastreefarm.com/">www.charliebrownschristmastreefarm.com</a>, for more information!
        </p>
    </>;
}

const ProfessionalPage = () => {
    return <>
        <h3>Education</h3>
        <p>
            I am a Class of 2021 graduate of the Rochester Institute of Technology, with a Bachelor's Degree in Software Engineering!
        </p>
        <p>
            Go Tigers!
        </p>
        <h3>Current Position</h3>
        <p>
            I currently live in Madison, Wisconsin where I am employed by Epic, an industry-leading electronic health records company
            headquartered in Verona, Wisconsin. At Epic I work in a full-stack development environment, maintaining and extending
            integrated enterprise applications running a React front-end, C# / .NET back-end, and a legacy M database.
        </p>
        <h3>Prior Experience</h3>
        <h4>Senior Capstone Project - LenelS2 Camera Security Simulator</h4>
        <p>
            During my year-long Senior Capstone project at RIT, I led a team of four other developers in the enhancement of a
            security camera simulator tool. Using a Kanban lifecycle with two-week sprints to maintain accountability and progress,
            we extended a legacy camera simulator system by creating a Python API for the system and deploying the tool in a
            container using Docker. In the end, we were able to exceed client expectations with the delivered product.
        </p>
        <h4>Amplify Education (Co-op)</h4>
        <p>
            At Amplify, I worked as a Test Engineer Co-op, developing automated test cases and performing manual release testing.
            I also assisted developers on my team with the management of AWS resources and occasionally performed minor development
            tasks, such as creating small components and maintaining web services.
        </p>
        <h4>ENSCO Avionics (Co-op)</h4>
        <p>
            While working with ENSCO Avionics as an Assistant Verification Engineer, I worked in a new team to establish a project
            lifecycle for the safety-critical validation and verification of the dashboard controller in
            Lockheed Martin's Combat Rescue Helicopter. I used VectorCAST to develop over 500 DO-178B compliant test cases.
        </p>
    </>;
}

const PAGE_NUMBER_PERSONAL = () => 1;
const PAGE_NUMBER_PROFESSIONAL = () => 2;