import React from 'react'
import ActionButton from "../components/ActionButton";
import {Link} from "@reach/router";

export default () => (
    <div className="lc-welcome-message">
        <div className="lc-action-buttons">
            <ActionButton className="primary">
                <Link to="/order-of-service">Order of service</Link>
            </ActionButton>
            <ActionButton>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link" target="_blank">Visitor Form</a>
            </ActionButton>
        </div>
        <h1><a href="https://youtu.be/YXBQWtTPnVk" target="_blank">Click HERE to join our live stream for March 14th!</a></h1>
        <h3>If the youtube stream is misbehaving, try viewing it on our <a href="https://www.facebook.com/LifeChurchAyer" target="_blank">Facebook page</a></h3>
    </div>
);

