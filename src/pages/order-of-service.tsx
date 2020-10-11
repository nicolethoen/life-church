import React from 'react'
import ServiceItem from "../components/ServiceItem";
import ScriptureLink from "../components/ScriptureLink";
import ScriptureDecorator from "../components/ScriptureDecorator";

export default () => {
    const worshipSongs = (
        <>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Praise To The Lord The Almighty</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">In Christ Alone/ The Solid Rock</a></div>
        </>
    );

    const sermonNotes = (
        <>
            <ScriptureLink reference="Jonah 3:1-5" text={<><ScriptureDecorator variant="verse">1</ScriptureDecorator>Then the word of the Lord came to Jonah the second time, saying, <ScriptureDecorator variant="verse">2</ScriptureDecorator> “Arise, go to Nineveh, that great city, and call out against it the message that I tell you.” <ScriptureDecorator variant="verse">3</ScriptureDecorator> So Jonah arose and went to Nineveh, according to the word of the Lord. Now Nineveh was an exceedingly great city,[a] three days' journey in breadth. <ScriptureDecorator variant="verse">4</ScriptureDecorator> Jonah began to go into the city, going a day's journey. And he called out, “Yet forty days, and Nineveh shall be overthrown!” <ScriptureDecorator variant="verse">5</ScriptureDecorator> And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.</>}/>
            <ScriptureLink reference="Philippians 3:7-11" text={<><ScriptureDecorator variant="verse">7</ScriptureDecorator> But whatever gain I had, I counted as loss for the sake of Christ. <ScriptureDecorator variant="verse">8</ScriptureDecorator> Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ <ScriptureDecorator variant="verse">9</ScriptureDecorator> and be found in him, not having a righteousness of my own that comes from the law, but that which comes through faith in Christ, the righteousness from God that depends on faith— <ScriptureDecorator variant="verse">10</ScriptureDecorator> that I may know him and the power of his resurrection, and may share his sufferings, becoming like him in his death, <ScriptureDecorator variant="verse">11</ScriptureDecorator> that by any means possible I may attain the resurrection from the dead.</>}/>
            <ScriptureLink reference="2 Corinthians 5:17" text="Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come."/>
            <ScriptureLink reference="Jonah 3:4" text="Jonah began to go into the city, going a day's journey. And he called out, “Yet forty days, and Nineveh shall be overthrown!”"/>
            <ScriptureLink reference="Jonah 3:5-10" text={(
                <>
                    <p><ScriptureDecorator variant="verse">5</ScriptureDecorator> And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.</p>
                    <p><ScriptureDecorator variant="verse">6</ScriptureDecorator> The word reached the king of Nineveh, and he arose from his throne, removed his robe, covered himself with sackcloth, and sat in ashes. <ScriptureDecorator variant="verse">7</ScriptureDecorator> And he issued a proclamation and published through Nineveh, “By the decree of the king and his nobles: Let neither man nor beast, herd nor flock, taste anything. Let them not feed or drink water, <ScriptureDecorator variant="verse">8</ScriptureDecorator> but let man and beast be covered with sackcloth, and let them call out mightily to God. Let everyone turn from his evil way and from the violence that is in his hands. <ScriptureDecorator variant="verse">9</ScriptureDecorator> Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish.”</p>
                    <p><ScriptureDecorator variant="verse">10</ScriptureDecorator> When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.</p>
                </>
            )}/>
        </>
    );

    const scriptureReading = (
        <>
            <ScriptureDecorator variant="chapter">Chapter 2</ScriptureDecorator>
            <p><ScriptureDecorator variant="verse">10</ScriptureDecorator> And the Lord spoke to the fish, and it vomited Jonah out upon the dry land.</p>
            <ScriptureDecorator variant="chapter">Chapter 3</ScriptureDecorator>
            <p><ScriptureDecorator variant="verse">1</ScriptureDecorator> Then the word of the Lord came to Jonah the second time, saying, <ScriptureDecorator variant="verse">2</ScriptureDecorator> “Arise, go to Nineveh, that great city, and call out against it the message that I tell you.” <ScriptureDecorator variant="verse">3</ScriptureDecorator> So Jonah arose and went to Nineveh, according to the word of the Lord. Now Nineveh was an exceedingly great city, three days' journey in breadth. <ScriptureDecorator variant="verse">4</ScriptureDecorator> Jonah began to go into the city, going a day's journey. And he called out, “Yet forty days, and Nineveh shall be overthrown!” <ScriptureDecorator variant="verse">5</ScriptureDecorator> And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.</p>
            <p><ScriptureDecorator variant="verse">6</ScriptureDecorator> The word reached the king of Nineveh, and he arose from his throne, removed his robe, covered himself with sackcloth, and sat in ashes. <ScriptureDecorator variant="verse">7</ScriptureDecorator> And he issued a proclamation and published through Nineveh, “By the decree of the king and his nobles: Let neither man nor beast, herd nor flock, taste anything. Let them not feed or drink water, <ScriptureDecorator variant="verse">8</ScriptureDecorator> but let man and beast be covered with sackcloth, and let them call out mightily to God. Let everyone turn from his evil way and from the violence that is in his hands. <ScriptureDecorator variant="verse">9</ScriptureDecorator> Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish.”</p>
            <p><ScriptureDecorator variant="verse">10</ScriptureDecorator> When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.</p>
        </>
    );
    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">October 11th, 2020</h2>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem>Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Lucas Flores - No clapping, please">Recitation of Hebrews 11:11-15</ServiceItem>
            <ServiceItem person="Andre & Julia Wu" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem person="Hunter Thoen">Praise, Thanksgiving, and Prayer</ServiceItem>
            <ServiceItem>Greet one another</ServiceItem>
            <ServiceItem person="Tara Kasey">Announcements</ServiceItem>
            <ServiceItem person="Nicole Thoen" subtext={<ScriptureLink reference="Jonah 2:10-3:10" text={scriptureReading} />}>Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey" subtext='"A better version of Jonah"' sermonNotes={sermonNotes}>Sermon</ServiceItem>
            <ServiceItem person="Andre & Julia Wu" subtext={<div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Make My Life a Prayer to You</a></div>}>Closing Hymn</ServiceItem>
            <ServiceItem>Benediction</ServiceItem>
        </div>
    );
}
