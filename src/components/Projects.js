import Image from '../assets/tool-icons/image.png'
const Proj_card = (props) => {
    return (
        <div className="proj-card">
            <img class='proj-img' src={props.img} alt={props.img_alt} />
            <div className="proj-info">
                <h3>{props.name}</h3>
                <strong>Skills</strong>
                <br></br>
                {props.content}
            </div>
        </div>
    )
}

const Projects = () => {
    const hosprec_info = "Hospital record management dashboard web application. "
        + "Serve to help quicken common tasks such as record finding, creating, editing. ";

    return (
        <div>
            <div className='proj-container'>
                <Proj_card
                    name="HospRec"
                    img={Image}
                    img_alt="test"
                    content="this is a test"
                />
                <Proj_card
                    name="Path Finding Algorithms"
                    img={Image}
                    img_alt="test"
                    content="this is a test"
                />
                <Proj_card
                    name="Friend Management System"
                    img={Image}
                    img_alt="test"
                    content="this is a test"
                />
            </div>
        </div>
    )
}

export default Projects;