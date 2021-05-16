import React from 'react'
import ActionButton from "../components/ActionButton";
import {Link} from "@reach/router";
import * as facebookIcon from '../assets/facebook.png';
import * as youtubeIcon from '../assets/youtube.png';
import ServiceInformation from "../components/ServiceInformation";

export default () => (
    <div className="lc-welcome-message">
        <h2 className="lc-announcement-banner">
            We will be gathering at Hidden Park this Sunday, May 16th. <br />
            Please join us in person, or watch the live stream.
        </h2>
        <div className="lc-splash-image">
            <div className="lc-action-buttons">
                <ActionButton className="primary">
                    <Link to="/live-stream">Live Stream</Link>
                </ActionButton>
                <ActionButton>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link" target="_blank">Visitor Form</a>
                </ActionButton>
            </div>
        </div>
        <div className="lc-tagline">
            Life Church exists in Ayer to be a transformed people, loving God, and loving others, sharing life in and through community.
        </div>
        <div className="lc-highlights">
            <div className="lc-highlight-small highlight1">
                <Link to="/calendar">Events</Link>
            </div>
            <div className="lc-highlight-small highlight2">
                <Link to="/sermons">Sermons</Link>
            </div>
            <div className="lc-highlight-small highlight3">
                <a href="https://www.facebook.com/LifeChurchAyer" target="_blank">Facebook Page</a>
            </div>
        </div>
        <ServiceInformation />
        <div className="lc-highlight-large">
            <h1>Contact Information</h1>
            <p>
                Email: <a href="mailto:lifechurch.ayer@gmail.com">lifechurch.ayer@gmail.com</a>
            </p>
            <p>
                Phone: <a href="tel:978-391-9324">(978) 391-9324</a>
            </p>
            <p>
                Daughter church of <a href="http://www.faithevfree.org">Faith Evangelical Free Church</a> in Acton, MA
            </p>
            <p>
                <a href="https://www.facebook.com/LifeChurchAyer" target="_blank"><img src={facebookIcon} aria-label="Facebook page link"/></a>
                <a href="https://www.youtube.com/channel/UCPWxKdRb7-ngMn4NITM39mw" target="_blank"><img src={youtubeIcon} aria-label="YouTube channel link"/></a>
            </p>
        </div>
    </div>
);

