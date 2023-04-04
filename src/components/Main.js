import Projects from './Projects';

const SectionTitle = (props) => {
    return (
        <div className="section-title">
            <h1>{props.title}</h1>
            <hr />
        </div>
    )
}

const Main = () => {
    const summary = 
        "3rd year student in Swinburne university of Technology in Victoria, Australia."
        + " I am passionate about creating effective and effecient dashboards in fields such as Hospitality and Ecommerce."
        + " I strive for simplicity but effective design to help improve productivity and without distractions."
        + " Scroll down to see more of what I do.";

    return (
        <div className='main-content'>
            <SectionTitle title='Welcome'/>
            <p className='summary'>{summary}</p>
            <SectionTitle title='Projects'/>
            <Projects />
            <SectionTitle title='Current Projects'/>
            <SectionTitle title='Experiences'/>
        </div>
    )
}

export default Main;