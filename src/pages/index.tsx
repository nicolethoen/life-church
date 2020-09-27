import React from 'react'
import ServiceItem from "components/ServiceItem";

export default () => {
    const worshipSongs = (
        <>
            <div className="lc-worship-song"><a href="https://www.youtube.com/watch?v=eRux8NlvEYo">Thy Mercy</a></div>
            <div className="lc-worship-song"><a href="https://www.youtube.com/watch?v=sgmhTPi0Zi8">Run to you</a></div>
            <div className="lc-worship-song"><a href="https://www.youtube.com/watch?v=7w3DXMkyj7Q">O, For a Thousand Tongues to Sing</a></div>
        </>
    );

    const scriptureReading = <a href="">Jonah 1:1-16</a>;

    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">September 27th, 2020</h2>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem person="Colbys">Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Hunter Thoen" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem person="Nicole Thoen">Announcements</ServiceItem>
            <ServiceItem person="Dawn Provost">Praise, Thanksgiving, and Prayer</ServiceItem>
            <ServiceItem person="Colbys" subtext={scriptureReading}>Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey" subtext='"The Battle of Wills"'>Sermon</ServiceItem>
            <ServiceItem person="Aaron Claussen">Benediction</ServiceItem>
        </div>
    )
}
