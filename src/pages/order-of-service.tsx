import React from 'react'
import ServiceItem from "../components/ServiceItem";
import ScriptureLink from "../components/ScriptureLink";
import ScriptureDecorator from "../components/ScriptureDecorator";

export default () => {
    // const callToWorship = (
    //     <>
    //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Father who has given us every spiritual blessing in Christ.</p>
    //         <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> We give praise and glory.</p>
    //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Son through whom we have redemption, forgiveness, and the riches of God's grace.</p>
    //         <p><ScriptureDecorator variant="verse">Congregation:</ScriptureDecorator> We give praise and glory.</p>
    //         <p><ScriptureDecorator variant="verse">Leader:</ScriptureDecorator> To the Spirit that seals us in his promise, the guarantee of our inheritance until we possess it.</p>
    //         <p><ScriptureDecorator variant="verse">All:</ScriptureDecorator> We give praise and glory.</p>
    //     </>
    // );
    const worshipSongs = (
        <>
            <div className="lc-worship-song">Jesus Paid It All</div>
            <div className="lc-worship-song">Tis So Sweet</div>
            <div className="lc-worship-song">At the Cross</div>
        </>
    );

    const scriptureReading = (
        <>
            <ScriptureDecorator variant="verse">4</ScriptureDecorator> even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love
            <ScriptureDecorator variant="verse">5</ScriptureDecorator> he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will,
            <ScriptureDecorator variant="verse">6</ScriptureDecorator> to the praise of his glorious grace, with which he has blessed us in the Beloved.
            <ScriptureDecorator variant="verse">7</ScriptureDecorator> In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace,
            <ScriptureDecorator variant="verse">8</ScriptureDecorator> which he lavished upon us, in all wisdom and insight
        </>
    );

    // const sermonNotes = (
    //     <>
    //         <ScriptureLink reference="1 John 4:8" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> Whoever does not love does not know God, because God is love.
    //             </>
    //         )}/>
    //         <ScriptureLink reference="John 15:9-13" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">9</ScriptureDecorator> As the Father has loved me, so have I loved you. Abide in my love.
    //                 <ScriptureDecorator variant="verse">10</ScriptureDecorator> If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love.
    //                 <ScriptureDecorator variant="verse">11</ScriptureDecorator> These things I have spoken to you, that my joy may be in you, and that your joy may be full.
    //                 <ScriptureDecorator variant="verse">12</ScriptureDecorator> “This is my commandment, that you love one another as I have loved you.
    //                 <ScriptureDecorator variant="verse">13</ScriptureDecorator> Greater love has no one than this, that someone lay down his life for his friends.
    //             </>
    //         )}/>
    //         <ScriptureLink reference="Jonah 4:4-11" text={(
    //             <>
    //                 <p>
    //                     <ScriptureDecorator variant="verse">4</ScriptureDecorator> And the Lord said, “Do you do well to be angry?”
    //                 </p>
    //                 <p>
    //                     <ScriptureDecorator variant="verse">5</ScriptureDecorator> Jonah went out of the city and sat to the east of the city and made a booth for himself there. He sat under it in the shade, till he should see what would become of the city.
    //                     <ScriptureDecorator variant="verse">6</ScriptureDecorator> Now the Lord God appointed a plant and made it come up over Jonah, that it might be a shade over his head, to save him from his discomfort. So Jonah was exceedingly glad because of the plant.
    //                     <ScriptureDecorator variant="verse">7</ScriptureDecorator> But when dawn came up the next day, God appointed a worm that attacked the plant, so that it withered.
    //                     <ScriptureDecorator variant="verse">8</ScriptureDecorator> When the sun rose, God appointed a scorching east wind, and the sun beat down on the head of Jonah so that he was faint. And he asked that he might die and said, “It is better for me to die than to live.”
    //                     <ScriptureDecorator variant="verse">9</ScriptureDecorator> But God said to Jonah, “Do you do well to be angry for the plant?” And he said, “Yes, I do well to be angry, angry enough to die.”
    //                     <ScriptureDecorator variant="verse">10</ScriptureDecorator> And the Lord said, “You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night.
    //                     <ScriptureDecorator variant="verse">11</ScriptureDecorator> And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?”
    //                 </p>
    //             </>
    //         )}/>
    //         <ScriptureLink reference="Romans 5:6-8" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">6</ScriptureDecorator> For while we were still weak, at the right time Christ died for the ungodly.
    //                 <ScriptureDecorator variant="verse">7</ScriptureDecorator> For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die—
    //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> but God shows his love for us in that while we were still sinners, Christ died for us.
    //             </>
    //         )}/>
    //         <ScriptureLink reference="Proverbs 7:17-19" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">17</ScriptureDecorator> I have perfumed my bed with myrrh, aloes, and cinnamon.
    //                 <ScriptureDecorator variant="verse">18</ScriptureDecorator> Come, let us take our fill of love till morning; let us delight ourselves with love.
    //                 <ScriptureDecorator variant="verse">19</ScriptureDecorator> For my husband is not at home; he has gone on a long journey;
    //             </>
    //         )}/>
    //         <ScriptureLink reference="Proverbs 30:15-16" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">15</ScriptureDecorator> The leech has two daughters: Give and Give. Three things are never satisfied; four never say, “Enough”:
    //                 <ScriptureDecorator variant="verse">16</ScriptureDecorator> Sheol, the barren womb, the land never satisfied with water, and the fire that never says, “Enough.”
    //             </>
    //         )}/>
    //         <ScriptureLink reference="1 Corinthians 13:4-6" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">4</ScriptureDecorator> Love is patient and kind; love does not envy or boast; it is not arrogant
    //                 <ScriptureDecorator variant="verse">5</ScriptureDecorator> or rude. It does not insist on its own way; it is not irritable or resentful;
    //                 <ScriptureDecorator variant="verse">6</ScriptureDecorator> it does not rejoice at wrongdoing, but rejoices with the truth.
    //             </>
    //         )}/>
    //         <ScriptureLink reference="Romans 5:8" text={(
    //             <>
    //                 <ScriptureDecorator variant="verse">8</ScriptureDecorator> but God shows his love for us in that while we were still sinners, Christ died for us.
    //             </>
    //         )}/>
    //     </>
    // );
    //
    const closingSong = (
        <div className="lc-worship-song">O For a Thousand Tongues to Sing</div>
    );
    return (
        <div className="lc-order-of-worship">
            <h2 className="lc-order-of-worship__date">January 10th, 2021</h2>
            <ServiceItem>Welcome</ServiceItem>
            <ServiceItem person="Dawn Provost">Call to Worship & Opening Prayer</ServiceItem>
            <ServiceItem person="Hunter Thoen" subtext={worshipSongs}>Worship</ServiceItem>
            <ServiceItem person="Nicole Thoen">Thanksgiving and Prayer</ServiceItem>
            <ServiceItem person="Tara Kasey">Announcements</ServiceItem>
            <ServiceItem person="Dawn Provost">Scripture Reading</ServiceItem>
            <ServiceItem person="Dan Kasey">Sermon</ServiceItem>
            <ServiceItem person="Dan Kasey">Benediction</ServiceItem>
        </div>
    );
}
