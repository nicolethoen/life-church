import React from 'react'
import Sermon from "../components/Sermon";

export default () => (
    <div className="lc-sermons">
        <h1>Sermons</h1>
        <h2 className="lc-sermons__date" role="heading">November 1st, 2020 - God’s Abounding Steadfast Love</h2>
        <div className="lc-sermons__video">
            <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fvideos%2F1001098817032291%2F&show_text=false&width=560"
                width="560" height="314" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0"
                allowTransparency={true} allow="encrypted-media" allowFullScreen={true} />
        </div>
        <div className="lc-sermons__previous">
            <h2 role="heading">Previous Sermons</h2>
            <Sermon link="https://youtu.be/X-XcdLaiijs">Oct 25th, 2020 - A Life Worth Living</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Oct 18th, 2020 - Angry with God</Sermon>
            <Sermon link="https://youtu.be/D8iSoEgy4n8">Sept 27th, 2020 - A Battle of Wills</Sermon>
            <Sermon link="https://youtu.be/5P-fpeqRH2E">Sept 20th, 2020 - Introduction to Jonah</Sermon>
            <Sermon link="https://youtu.be/RcfiGyRD1uQ">Sept 13th, 2020</Sermon>
            <Sermon link="https://youtu.be/_TlI5iw0Oyg">Sept 6th, 2020</Sermon>
        </div>
    </div>
)