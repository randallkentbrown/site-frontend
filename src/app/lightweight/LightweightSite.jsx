import React, { useState, useCallback } from "react";
import "./LightweightSite.css";

/* Site */

export default function LightweightSite() {

    const [page, setPage] = useState(PAGE_NUMBERS.personal);

    const setPageNumber = (pageNumber) => { setPage(pageNumber); };

    return <div className="_site">
        <Header />
        <Toolbar setPage={setPageNumber}/>
        <Page page={page}/>
    </div>;
};

/* Header */

const Header = () => {
    return <div className="_headerContainer">
        <h1 className="_header">Randall Kent Brown Jr.</h1>
        <h2 className="_headerRight">Madison, WI</h2>
    </div>;
};

/* Toolbar */

const Toolbar = (props) => {

    const setPage = props.setPage;

    const personalPageNumber = PAGE_NUMBERS.personal;
    const professionalPageNumber = PAGE_NUMBERS.professional;
    const contactPageNumber = PAGE_NUMBERS.contact;

    const switchToPersonalPage = useCallback(() => { setPage(personalPageNumber); }, [setPage, personalPageNumber]);
    const switchToProfessionalPage = useCallback(() => { setPage(professionalPageNumber); }, [setPage, professionalPageNumber]);
    const switchToContactPage = useCallback(() => { setPage(contactPageNumber); }, [setPage, contactPageNumber]);

    return <nav className="_toolbar">
        <button className="_toolbarButton" onClick={switchToPersonalPage}>Personal</button>
        <button className="_toolbarButton" onClick={switchToProfessionalPage}>Professional</button>
        <button className="_toolbarButton" onClick={switchToContactPage}>Contact</button>
    </nav>
};

/* Pages */

const Page = (props) => {

    const page = props.page;
    let content = "";

    switch(page) {
        case PAGE_NUMBERS.personal:
            content = <PersonalPage />;
            break;
        case PAGE_NUMBERS.professional:
            content = <ProfessionalPage />;
            break;
        case PAGE_NUMBERS.contact:
            content = <ContactPage />;
            break;
        default:
            content = "Hey... how'd you get here?";
            break;
    }

    return <div className="_page">{content}</div>
};
  
const PersonalPage = () => {
    return <>
        <h3 className="_firstHeading">About Me</h3>
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
            My family are the proud owners of a beautiful Christmas Tree Farm in Milford, New Jersey, near the Pennsylvania border.
            If you're ever in the area, or just curious about our business, please feel free to visit our site,
            at <a href="https://charliebrownschristmastreefarm.com/">www.charliebrownschristmastreefarm.com</a>, for more information,
            and maybe even come say 'hi'!
        </p>
    </>;
}

/* A heading with a sub-title displaying a provided string as a date. */
const DatedHeading = ({children, date}) => {
    return <h4>
        {children}
        <br/>
        <span className="_headingDate">Dates: {date}</span>
    </h4>;
};

/* A page detailing my professional experience. */
const ProfessionalPage = () => {
    return <>
        <h3 className="_firstHeading">Education</h3>
        <p>
            I hold a Bachelor's of Science, <i>cum laude</i>, in <b>Software Engineering</b> from <b>Rochester Institute of Technology</b> (2021).
            I received a minor in Computer Engineering and I completed an Immersion in Environmental Studies. Go Tigers!
        </p>

        <h3>Current Engagements</h3>
        <DatedHeading date={<>11/2023 - <i>current</i></>}>Blain Supply / Blain's Farm and Fleet</DatedHeading>
        <p>
            Since November of 2023 I have been a Software Developer in the IT Division of Blain's Farm and Fleet, a consumer-focused regional retailer
            with stores across the Midwest. I contribute full-stack software development with a focus on user-centered design, integration, and agile process management.
        </p>
        <h3>Prior Experience</h3>
        <DatedHeading date="8/2021 - 10/2023">Epic Systems Corp.</DatedHeading>
        <p>
            I spent two intense and rewarding years at Epic Systems in Verona, WI, where I worked in a full-stack development environment.
            I was responsible for maintaining and extending integrated enterprise applications running a React front-end,
            C# / .NET back-end, and a legacy M database.
        </p>
        <DatedHeading date="8/2020 - 5/2021">Senior Capstone Project - LenelS2 Security Camera Simulator</DatedHeading>
        <p>
            During my year-long Senior Capstone project at RIT, I led a team of four other student developers in the enhancement of a
            security camera simulator tool. Using a Kanban lifecycle with two-week sprints to maintain accountability and progress,
            we extended a legacy camera simulator system by creating a Python API for the system and deploying the tool in a
            container using Docker. In the end, we were able to exceed client expectations with the delivered product.
        </p>
        <DatedHeading date="1/2020 - 5/2020">Amplify Education (Co-Op)</DatedHeading>
        <p>
            At Amplify, I worked as a Test Engineer Co-op, developing automated test cases and performing manual release testing.
            I also assisted developers on my team with the management of AWS resources and occasionally performed minor development
            tasks, such as creating small components and maintaining web services.
        </p>
        <DatedHeading date="7/2018 - 12/2018">ENSCO Avionics (Co-Op)</DatedHeading>
        <p>
            While working with ENSCO Avionics as an Assistant Verification Engineer, I worked in a new team to establish a project
            lifecycle for the safety-critical validation and verification of the dashboard controller in
            Lockheed Martin's Combat Rescue Helicopter. I used VectorCAST to develop over 500 DO-178B compliant test cases.
        </p>
    </>;
}

const ContactPage = () => {
    return <>
        <h3 className="_firstHeading">Get In Touch</h3>
        <p>
            If you have a <i>legitimate</i> reason to contact me, please do! Reach out through these official channels:
        </p>
        email: <a href="mailto:randall.k.brown.jr@gmail.com">randall.k.brown.jr@gmail.com</a>
        <br />
        linkedin: <a href="https://www.linkedin.com/in/randall-kent-brown">www.linkedin.com/in/randall-kent-brown</a>
        <h3>Check Out the Site</h3>
        <p>
            If you're curious about the code behind the site, you're in luck: I've made the code open source! Feel free to check it out on GitHub.
        </p>
        repo: <a href="https://www.github.com/randallkentbrown/site-frontend">www.github.com/randallkentbrown/site-frontend</a>
    </>;
};

/* Enums */

const PAGE_NUMBERS = {
    personal: 1,
    professional: 2,
    contact: 3
};