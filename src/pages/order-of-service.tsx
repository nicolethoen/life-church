import React from 'react'
import ServiceItem from "../components/ServiceItem";
import ScriptureLink from "../components/ScriptureLink";
import ScriptureDecorator from "../components/ScriptureDecorator";

export default () => {
    const callToWorship = (
        <>
            <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation!</p>
            <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise!</p>
            <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> For the Lord is a great God, and a great King above all gods.</p>
            <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> In his hand are the depths of the earth; the heights of the mountains are his also.</p>
            <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> The sea is his, for he made it, and his hands formed the dry land.</p>
            <p><ScriptureDecorator variant="verse">All:</ScriptureDecorator> Oh come, let us worship and bow down; let us kneel before the Lord, our Maker! For he is our God, and we are the people of his pasture, and the sheep of his hand.</p>
        </>
    );
    const worshipSongs = (
        <>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">If we ever needed you</a></div>
            <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Cornerstone</a></div>
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

    const sermonNotes = (
        <>
            <ScriptureLink reference="2 Kings 14:23-25" text={(
                <>
                    <ScriptureDecorator variant="verse">23</ScriptureDecorator> In the fifteenth year of Amaziah the son of Joash, king of Judah, Jeroboam the son of Joash, king of Israel, began to reign in Samaria, and he reigned forty-one years.
                    <ScriptureDecorator variant="verse">24</ScriptureDecorator> And he did what was evil in the sight of the Lord. He did not depart from all the sins of Jeroboam the son of Nebat, which he made Israel to sin.
                    <ScriptureDecorator variant="verse">25</ScriptureDecorator> He restored the border of Israel from Lebo-hamath as far as the Sea of the Arabah, according to the word of the Lord, the God of Israel, which he spoke by his servant Jonah the son of Amittai, the prophet, who was from Gath-hepher.
                </>
            )}/>
            <ScriptureLink reference="Jonah 3:10-4:3" text={(
                <>
                    <ScriptureDecorator variant="chapter">Chapter 3</ScriptureDecorator>
                    <p><ScriptureDecorator variant="verse">10</ScriptureDecorator> When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.</p>
                    <ScriptureDecorator variant="chapter">Chapter 4</ScriptureDecorator>
                    <p>
                        <ScriptureDecorator variant="verse">1</ScriptureDecorator> But it displeased Jonah exceedingly, and he was angry.
                        <ScriptureDecorator variant="verse">2</ScriptureDecorator> And he prayed to the Lord and said, “O Lord, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.
                        <ScriptureDecorator variant="verse">3</ScriptureDecorator> Therefore now, O Lord, please take my life from me, for it is better for me to die than to live.”
                    </p>
                </>
            )}/>
            <ScriptureLink reference="Philippians 1:18-21" text={(
                <>
                    <p>
                        <ScriptureDecorator variant="verse">18</ScriptureDecorator> What then? Only that in every way, whether in pretense or in truth, Christ is proclaimed, and in that I rejoice. Yes, and I will rejoice,
                        <ScriptureDecorator variant="verse">19</ScriptureDecorator> for I know that through your prayers and the help of the Spirit of Jesus Christ this will turn out for my deliverance,
                        <ScriptureDecorator variant="verse">20</ScriptureDecorator> as it is my eager expectation and hope that I will not be at all ashamed, but that with full courage now as always Christ will be honored in my body, whether by life or by death.
                        <ScriptureDecorator variant="verse">21</ScriptureDecorator> For to me to live is Christ, and to die is gain.
                    </p>
                </>
            )}/>
            <ScriptureLink reference="Philippians 3:20-4:1" text={(
                <>
                    <ScriptureDecorator variant="chapter">Chapter 3</ScriptureDecorator>
                    <p>
                        <ScriptureDecorator variant="verse">20</ScriptureDecorator> But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ,
                        <ScriptureDecorator variant="verse">21</ScriptureDecorator> who will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself.
                    </p>
                    <ScriptureDecorator variant="chapter">Chapter 4</ScriptureDecorator>
                    <p>
                        <ScriptureDecorator variant="verse">1</ScriptureDecorator> Therefore, my brothers,[a] whom I love and long for, my joy and crown, stand firm thus in the Lord, my beloved.
                    </p>
                </>
            )}/>
            <ScriptureLink reference="Luke 19:41-42" text={(
                <>
                    <p>
                        <ScriptureDecorator variant="verse">41</ScriptureDecorator> And when he drew near and saw the city, he wept over it,
                        <ScriptureDecorator variant="verse">42</ScriptureDecorator> saying, “Would that you, even you, had known on this day the things that make for peace! But now they are hidden from your eyes.
                    </p>
                </>
            )}/>
        </>
    );

    const closingSong = (
        <div className="lc-worship-song"><a href="https://docs.google.com/document/d/e/2PACX-1vQwSPcRQhJYtfFZhqA7MNfL-3jU3EbC2dqHysYqugLCgtvxzoe8oyfbh4MXANQ6qwro0pKcHQ3VzRyt/pub" target="_blank">Jesus</a></div>
    );
    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">October 25th, 2020</h2>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem person="Andre Wu" subtext={callToWorship}>Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Nicole Thoen & Dawn Provost" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem>Praise, Thanksgiving, and Prayer</ServiceItem>
            <ServiceItem>Greet one another</ServiceItem>
            <ServiceItem>Announcements</ServiceItem>
            <ServiceItem person="Julia Wu" subtext={<ScriptureLink reference="Jonah 3:10-4:11" text={scriptureReading} />}>Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey" sermonNotes={sermonNotes}>Sermon - "A Life Worth Living"</ServiceItem>
            <ServiceItem person="Nicole Thoen & Dawn Provost" subtext={closingSong}>Closing Song</ServiceItem>
            <ServiceItem>Benediction</ServiceItem>
        </div>
    );
}
