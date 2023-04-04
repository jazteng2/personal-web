import Profile_img from '../assets/profile-pics/Profile.jpg'

const LeftMenu = () => {
    return (
        <div className='left-menu'>
            <div className='profile-pic'>
                <img src={Profile_img} alt='profile' />
            </div>
            <div className='name'>Jared Teng</div>
            <div className='outline'>
                <ul>
                    <li>Welcome</li>
                    <li>Projects</li>
                    <li>Ongoing Projects</li>
                    <li>Experiences</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftMenu;