import React from 'react'
import Sermon from "../components/Sermon";

export default () => (
    <div className="lc-sermons">
        <h1>Sermons</h1>
        <h2 className="lc-sermons__date" role="heading">November 8th, 2020 - Beginning the Journey in Ephesians</h2>
        <div className="lc-sermons__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HWPYlnJ0vU8" frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
        <div className="lc-sermons__previous">
            <h2 role="heading">Previous Sermons</h2>
            <Sermon link="https://fb.watch/1MnaS-4BQs/">Nov 1st, 2020 - God's Abounding Steadfast Love</Sermon>
            <Sermon link="https://youtu.be/X-XcdLaiijs">Oct 25th, 2020 - A Life Worth Living</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Oct 18th, 2020 - Angry with God</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Sept 27th, 2020 - A Battle of Wills</Sermon>
            <Sermon link="https://youtu.be/5P-fpeqRH2E">Sept 20th, 2020 - Introduction to Jonah</Sermon>
            <Sermon link="https://youtu.be/RcfiGyRD1uQ">Sept 13th, 2020</Sermon>
            <Sermon link="https://youtu.be/_TlI5iw0Oyg">Sept 6th, 2020</Sermon>
        </div>
    </div>
)