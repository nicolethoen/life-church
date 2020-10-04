import React from 'react'
import ServiceItem from "components/ServiceItem";

export default () => {
    const worshipSongs = (
        <>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">I Surrender</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Lord, I Need You</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">You Alone Can Rescue</a></div>
        </>
    );

    const scriptureReading = <a href="https://www.biblegateway.com/passage/?search=jonah+1%3A14-2%3A10&version=ESV" target="_blank">Jonah 1:14 - 2:10</a>;

    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">October 4th, 2020</h2>
            <div className="lc-order-of-worship__faithlife-bulletin">
                Follow along with the sermon slides on <a href="https://faithlife.com/life-church-ayer/bulletins/68148114" target="_blank">Faithlife</a> (login required)
            </div>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem person="Andre Wu">Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Nicole Thoen">Announcements</ServiceItem>
            <ServiceItem person="Dawn Provost & Nicole Thoen" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem person="Tara Kasey">Praise, Thanksgiving, and Prayer</ServiceItem>
            <ServiceItem>Greet one another</ServiceItem>
            <ServiceItem person="Andre Wu" subtext={scriptureReading}>Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey" subtext='"Swallowed Up"'>Sermon</ServiceItem>
            <ServiceItem>Communion</ServiceItem>
            <ServiceItem person="Dan Kasey">Benediction</ServiceItem>
        </div>
    )
}
