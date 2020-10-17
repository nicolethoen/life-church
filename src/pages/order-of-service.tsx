import React from 'react'
import ServiceItem from "../components/ServiceItem";
import ScriptureLink from "../components/ScriptureLink";
import ScriptureDecorator from "../components/ScriptureDecorator";

export default () => {
    const worshipSongs = (
        <>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Different</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Multiplied</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Your Will Be Done</a></div>
        </>
    );

    const sermonNotes = (
        <>
            <ScriptureLink reference="Jonah 3:4" text={<><ScriptureDecorator variant="verse">4</ScriptureDecorator> Jonah began to go into the city, going a day's journey. And he called out, “Yet forty days, and Nineveh shall be overthrown!” <ScriptureDecorator variant="verse">5</ScriptureDecorator> And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them.</>}/>
            <ScriptureLink reference="2 Timothy 2:21-22" text={<><ScriptureDecorator variant="verse">21</ScriptureDecorator> Therefore, if anyone cleanses himself from what is dishonorable,[a] he will be a vessel for honorable use, set apart as holy, useful to the master of the house, ready for every good work. <ScriptureDecorator variant="verse">22</ScriptureDecorator> So flee youthful passions and pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart.</>} />
            <ScriptureLink reference="Romans 8:5-6, 26-27" text={(
                <>
                    <p>
                        <ScriptureDecorator variant="verse">5</ScriptureDecorator> For those who live according to the flesh set their minds on the things of the flesh, but those who live according to the Spirit set their minds on the things of the Spirit.
                        <ScriptureDecorator variant="verse">6</ScriptureDecorator> For to set the mind on the flesh is death, but to set the mind on the Spirit is life and peace.
                    </p>
                    <p>
                        <ScriptureDecorator variant="verse">26</ScriptureDecorator> Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.
                        <ScriptureDecorator variant="verse">27</ScriptureDecorator> And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.
                    </p>
                </>
            )}/>
            <ScriptureLink reference="Jonah 4:2-4" text={(
                <>
                    <ScriptureDecorator variant="verse">2</ScriptureDecorator> And he prayed to the Lord and said, “O Lord, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.
                    <ScriptureDecorator variant="verse">3</ScriptureDecorator> Therefore now, O Lord, please take my life from me, for it is better for me to die than to live.”
                    <ScriptureDecorator variant="verse">4</ScriptureDecorator> And the Lord said, “Do you do well to be angry?”
                </>
            )}/>
            <ScriptureLink reference="Ephesians 4:26" text={<><ScriptureDecorator variant="verse">26</ScriptureDecorator> Be angry and do not sin; do not let the sun go down on your anger</>}/>
            <ScriptureLink reference="Proverbs 19:3" text={<><ScriptureDecorator variant="verse">3</ScriptureDecorator> When a man's folly brings his way to ruin, his heart rages against the Lord.</>}/>
            <ScriptureLink reference="Isaiah 45:24" text={<><ScriptureDecorator variant="verse">24</ScriptureDecorator> “Only in the Lord, it shall be said of me, are righteousness and strength; to him shall come and be ashamed all who were incensed against him.</>}/>
            <ScriptureLink reference="Revelation 11:18" text={<><ScriptureDecorator variant="verse">18</ScriptureDecorator> The nations raged, but your wrath came, and the time for the dead to be judged, and for rewarding your servants, the prophets and saints, and those who fear your name, both small and great, and for destroying the destroyers of the earth.”</>}/>
            <ScriptureLink reference="Ephesians 4:21-32" text={(
                <>
                    <p>
                        <ScriptureDecorator variant="verse">21</ScriptureDecorator> assuming that you have heard about him and were taught in him, as the truth is in Jesus,
                        <ScriptureDecorator variant="verse">22</ScriptureDecorator> to put off your old self, which belongs to your former manner of life and is corrupt through deceitful desires,
                        <ScriptureDecorator variant="verse">23</ScriptureDecorator> and to be renewed in the spirit of your minds,
                        <ScriptureDecorator variant="verse">24</ScriptureDecorator> and to put on the new self, created after the likeness of God in true righteousness and holiness.
                    </p>
                    <p>
                        <ScriptureDecorator variant="verse">25</ScriptureDecorator> Therefore, having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another.
                        <ScriptureDecorator variant="verse">26</ScriptureDecorator> Be angry and do not sin; do not let the sun go down on your anger,
                        <ScriptureDecorator variant="verse">27</ScriptureDecorator> and give no opportunity to the devil.
                        <ScriptureDecorator variant="verse">28</ScriptureDecorator> Let the thief no longer steal, but rather let him labor, doing honest work with his own hands, so that he may have something to share with anyone in need.
                        <ScriptureDecorator variant="verse">29</ScriptureDecorator> Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.
                        <ScriptureDecorator variant="verse">30</ScriptureDecorator> And do not grieve the Holy Spirit of God, by whom you were sealed for the day of redemption.
                        <ScriptureDecorator variant="verse">31</ScriptureDecorator> Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice.
                        <ScriptureDecorator variant="verse">32</ScriptureDecorator> Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.
                    </p>
                </>
            )}/>
        </>
    );

    const scriptureReading = (
        <>
            <ScriptureDecorator variant="chapter">Chapter 3</ScriptureDecorator>
            <p><ScriptureDecorator variant="verse">10</ScriptureDecorator> When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.</p>
            <ScriptureDecorator variant="chapter">Chapter 4</ScriptureDecorator>
            <p>
                <ScriptureDecorator variant="verse">1</ScriptureDecorator> But it displeased Jonah exceedingly, and he was angry.
                <ScriptureDecorator variant="verse">2</ScriptureDecorator> And he prayed to the Lord and said, “O Lord, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.
                <ScriptureDecorator variant="verse">3</ScriptureDecorator> Therefore now, O Lord, please take my life from me, for it is better for me to die than to live.”
                <ScriptureDecorator variant="verse">4</ScriptureDecorator> And the Lord said, “Do you do well to be angry?”
            </p>
            <p>
                <ScriptureDecorator variant="verse">5</ScriptureDecorator> Jonah went out of the city and sat to the east of the city and made a booth for himself there. He sat under it in the shade, till he should see what would become of the city.
                <ScriptureDecorator variant="verse">6</ScriptureDecorator> Now the Lord God appointed a plant and made it come up over Jonah, that it might be a shade over his head, to save him from his discomfort. So Jonah was exceedingly glad because of the plant.
                <ScriptureDecorator variant="verse">7</ScriptureDecorator> But when dawn came up the next day, God appointed a worm that attacked the plant, so that it withered.
                <ScriptureDecorator variant="verse">8</ScriptureDecorator> When the sun rose, God appointed a scorching east wind, and the sun beat down on the head of Jonah so that he was faint. And he asked that he might die and said, “It is better for me to die than to live.”
                <ScriptureDecorator variant="verse">9</ScriptureDecorator> But God said to Jonah, “Do you do well to be angry for the plant?” And he said, “Yes, I do well to be angry, angry enough to die.”
                <ScriptureDecorator variant="verse">10</ScriptureDecorator> And the Lord said, “You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night.
                <ScriptureDecorator variant="verse">11</ScriptureDecorator> And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?”
            </p>
        </>
    );
    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">October 18th, 2020</h2>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem person="Andre Wu">Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Tara and Jazmyn Kasey" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem person="Dawn Provost">Praise, Thanksgiving, and Prayer</ServiceItem>
            <ServiceItem>Greet one another</ServiceItem>
            <ServiceItem person="Aaron Claussen">Announcements</ServiceItem>
            <ServiceItem person="David Graves" subtext={<ScriptureLink reference="Jonah 3:10-4:11" text={scriptureReading} />}>Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey" sermonNotes={sermonNotes}>Sermon - "Angry with God"</ServiceItem>
            <ServiceItem>Benediction</ServiceItem>
        </div>
    );
}
