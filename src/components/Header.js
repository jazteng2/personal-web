import React, { useEffect } from 'react';
import Github_icon from '../assets/web-icons/github-icon.png'
import LinkedIn_icon from '../assets/web-icons/linkedin-icon.png'
import Email_icon from '../assets/web-icons/email-icon.png'
// TO DO LIST:
// - highlight current page with underline 
// - current page underline is yellow
function Header() {
    useEffect(() => {
        const navlinks = document.querySelectorAll('.nav-link');

        // Animate expanded underline on hover
        navlinks.forEach(link => {
            const underline = link.querySelector('.link-underline');

            link.addEventListener('mouseover', (event) => {
                underline.style.visibility = 'visible';
                underline.style.transition = '0.3s';
                underline.style.width = `100px`;
            })

            link.addEventListener('mouseleave', (event) => {
                underline.style.visibility = 'hidden';
                underline.style.transition = '0.3s';
                underline.style.width = `2px`;
            })
        });


    }, [])

    return (
        <header>
            <nav>
                <div className='nav-links'>
                    <a href='#home' className='nav-link' id='nav-link'>Home
                        <div className='link-underline' id='link-underline'></div>
                    </a>
                    <a href='#About' className='nav-link' id='nav-link'>About
                        <div className='link-underline' id='link-underline'></div>
                    </a>
                </div><div className='nav-icons'>
                    <a href='https://github.com/jazteng2' target='_blank' rel='noreferrer'><img src={Github_icon} alt='github-icon' className='nav-icon' /></a>
                    <a href='https://www.linkedin.com/in/jared-teng-b4148b220' target='_blank' rel='noreferrer'><img src={LinkedIn_icon} alt='linkedin-icon' className='nav-icon' /></a>
                    <a href='mailto:jaredteng200@gmail.com' target='_blank' rel='noreferrer'><img src={Email_icon} alt='email-icon' className='nav-icon' /></a>
                </div>
            </nav>
        </header>
    );
};

export default Header;


// Hide and show nav when scrolling
// const navbar = document.getElementById('navbar');
// var prevSchrollpos = window.scrollY || window.pageYOffset;
// window.onscroll = () => {
//     var currentScrollPos = window.scrollY || window.pageYOffset;
//     if (prevSchrollpos > currentScrollPos || !window.scrollbars) {
//         navbar.style.top = "0";
//     } else {
//         navbar.style.top = "-100px";
//     }
//     prevSchrollpos = currentScrollPos;
// };
// Add this styles to 'nav' to allow hide on scroll
// transition: top 0.3s;