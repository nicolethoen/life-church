import React from 'react'
import Sermon from "../components/Sermon";

export default () => (
    <div className="lc-sermons">
        <h1>Sermons</h1>
        <h2 className="lc-sermons__date" role="heading">April 11th, 2021 - The Stockholm Syndrome</h2>
        <div className="lc-sermons__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/m5GWImDutps"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
        <h1>Previous Sermons</h1>
        <div className="lc-sermons__previous">
            <h2 role="heading">Ephesians</h2>
            <Sermon link="https://youtu.be/lN91L2dt0CM">March 21st, 2021 - Turning up the Contrast</Sermon>
            <Sermon link="https://youtu.be/YXBQWtTPnVk">March 14th, 2021 - A New Look for a New Society</Sermon>
            <Sermon link="https://youtu.be/I5o3PzHph24">March 7th, 2021 - Growing in Maturity and Unity</Sermon>
            <Sermon link="https://youtu.be/zObg_1Bd9N4">February 28th, 2021 - God's Grace in our Gifting</Sermon>
            <Sermon link="https://youtu.be/EQNhcshLCrk">February 14th, 2021 - Walk this way, unite this way</Sermon>
            <Sermon link="https://youtu.be/RCuxfW16sw0">February 7th, 2021 - Prayer for Strength</Sermon>
            <Sermon link="https://youtu.be/RCuxfW16sw0">January 31th, 2021 - The Divine Detour</Sermon>
            <Sermon link="https://youtu.be/IWrk_DTe18A">January 24th, 2021 - The United Community in Christ</Sermon>
            <Sermon link="https://youtu.be/Qt4qunDskgc">January 17th, 2021 - The Walking Dead Made Alive in Christ</Sermon>
            <Sermon link="https://youtu.be/GVej-OcfzqY">January 10th, 2021 - Eyes of our Hearts Enlightened</Sermon>
            <Sermon link="https://youtu.be/9H7zkYNZfIo">January 3rd, 2021 - Continuing in Ephesians</Sermon>
            <Sermon link="https://youtu.be/dsOG8t6X7Fk">Dec 13th, 2020 - Ephesians 1:11-14 - God's Guarantee</Sermon>
            <Sermon link="https://youtu.be/dsOG8t6X7Fk">Dec 6th, 2020 - Ephesians 1:5-10 - God's Glorious Plan</Sermon>
            <Sermon link="https://fb.watch/2bLf_xBRRd/">Nov 22nd, 2020 - Ephesians 1:4-8</Sermon>
            <Sermon link="https://fb.watch/1VCx2JzO9D/">Nov 15th, 2020 - Chosen out of Love to be in Christ</Sermon>
            <Sermon link="https://fb.watch/1VCzESHhca/">Nov 8th, 2020 - Beginning the Journey in Ephesians</Sermon>
            <h2 role="heading">Jonah</h2>
            <Sermon link="https://fb.watch/1MnaS-4BQs/">Nov 1st, 2020 - God's Abounding Steadfast Love</Sermon>
            <Sermon link="https://youtu.be/X-XcdLaiijs">Oct 25th, 2020 - A Life Worth Living</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Oct 18th, 2020 - Angry with God</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Sept 27th, 2020 - A Battle of Wills</Sermon>
            <Sermon link="https://youtu.be/5P-fpeqRH2E">Sept 20th, 2020 - Introduction to Jonah</Sermon>
            <h2 role="heading">Special Sermons</h2>
            <Sermon link="https://youtu.be/7QBhHLujj2c">April 4th, 2021 - The Good Catastrophe - Easter</Sermon>
            <Sermon link="https://youtu.be/Ix8TKa0Ven0">March 28th, 2021 - Pastor Brad Johnson The Triumph Jesus Offers</Sermon>
            <Sermon link="https://youtu.be/orMYPTR09yk">February 21st, 2021 - Ryan Fields: Jesus Christ, Lord of All</Sermon>
            <Sermon link="https://youtu.be/ONvXzfUSqF0">Dec 27th, 2020 - Psalm 23</Sermon>
            <Sermon link="https://youtu.be/QxHakwy4cDk">Dec 20th, 2020 - God and Sinner Reconciled</Sermon>
            <Sermon link="https://youtu.be/TVUa2dLOAEg">Nov 29nd, 2020 - Ryan Fields: 2 Corinthians 1:3-11</Sermon>
            <Sermon link="https://youtu.be/RcfiGyRD1uQ">Sept 13th, 2020</Sermon>
            <Sermon link="https://youtu.be/_TlI5iw0Oyg">Sept 6th, 2020</Sermon>
        </div>
    </div>
)