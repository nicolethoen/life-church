import React from 'react'
import * as img from '../assets/announcement.png';

export default () => (
    <div className="lc-announcement-flyer">
        <img aria-hidden="true" src={img} alt="announcement flyer" width={600}/>
        <div className="visible-to-screen-reader">
            Sunday mornings we host a praise and worship service at 10:30am eastern. Join us online using Zoom or follow the live stream broadcasted from our website and facebook page.
            Wednesday evenings we dig into scripture and build transparent community at 7:00pm eastern. Join us online using Zoom.
            We have a new facebook page found at facebook.com/LifeChurchAyer.
            For more information visit LifeChurch.Ayer@gmail.com.
            Life Church is a daughter church of Faith EV Free Church in Acton. www.faithEVFree.org
        </div>
    </div>
)
