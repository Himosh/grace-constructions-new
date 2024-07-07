import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const NewFooter = () => {
    return (
        <div id="Footer">
            <div id="FooterCon">
                <div id="Logo">
                    <img src="/assets/footerLogo.png" alt="" />
                </div>

                <div id="FooterDetail">
                    <div id="Location">
                        <div id="LocationHead">
                            Location

                        </div>
                        <div id="LocationCon">
                            No. 156/43, Dockyard<br />
                            Road, Trincomalee
                        </div>

                    </div>

                    <div id="Link">
                        <div id="LinkHead">
                            Links
                        </div>
                        <div id="LinkCon">
                            <Link to="/about">About us</Link> <br />
                            <Link to="/contact">Contact us</Link> <br />
                            <Link to="career">Career</Link> <br />
                        </div>

                    </div>

                    <div id="Legal">
                        <div id="LegalHead">
                            Projects
                        </div>
                        <div id="LegalCon">
                            <Link to="/ongoing-projects">Ongoing</Link> <br />
                            <Link to="/completed-projects">Completed</Link>  <br />
                        </div>
                    </div>
                </div>
            </div>

            <div id="FooterSocial">
                <div id="Icon">

                    <a href="https://www.facebook.com/share/vP5cfxesDuLUHC4r/?mibextid=LQQJ4d" target="_blank">
                        <img src="/assets/fb.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/grac_econstruction?igsh=ZHNvYXlxbDZqYW9z" target="_blank">
                        <img src="/assets/insta.png" alt="" />
                    </a>
                    <img src="/assets/twitter.png" alt="" />

                </div>
                <div id="Copyright">
                    Copyright © 2024 All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default NewFooter;