import React from 'react'
import * as img1 from '../assets/announcement1.png';
import * as img2 from '../assets/announcement2.png';
import * as img3 from '../assets/announcement3.png';
import * as img4 from '../assets/announcement4.png';
import * as img5 from '../assets/announcement5.png';
import * as img6 from '../assets/announcement6.png';

export default () => (
    <div className="lc-announcement-flyer">
        <img aria-hidden="true" src={img1} alt="Church online announcement" width={600}/>
        <div className="visible-to-screen-reader">
            Sunday mornings we host a praise and worship service at 10:30am eastern. Follow the live stream broadcasted from our website and facebook page.
            Join us after the service for fellowship via Zoom
        </div>
        <img aria-hidden="true" src={img2} alt="Life groups announcement" width={600}/>
        <div className="visible-to-screen-reader">
            Wednesday evenings we dig into scripture and build transparent community at 7:00pm eastern. Email Julia Wu for Zoom link at LifeChurch.Ayer@gmail.com.
        </div>
        <img aria-hidden="true" src={img3} alt="Journey to Bethlehem video experience" width={600}/>
        <div className="visible-to-screen-reader">
            19 minute YouTube video experience in lieu of the annual live nativity.
        </div>
        <img aria-hidden="true" src={img4} alt="Stone Soup announcement" width={600}/>
        <div className="visible-to-screen-reader">
            You can give money toward fresh produce each week or donate dry goods. Visit LifeChurchAyer.com/stone-soup for details.
        </div>
        <img aria-hidden="true" src={img5} alt="Hope for the Children of Haiti announcement" width={600}/>
        <div className="visible-to-screen-reader">
            Support Haitian young adults serve in their own country to celebrate Christmas.
        </div>
        <img aria-hidden="true" src={img6} alt="Tithes and offerings" width={600}/>
        <div className="visible-to-screen-reader">
            Visit https://tithe.ly/user to create an account and search for Life Church Ayer.ß
        </div>

    </div>
)
