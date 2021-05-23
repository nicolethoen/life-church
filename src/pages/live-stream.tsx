import React from 'react';
import OrderOfService from "../components/OrderOfService";

export default () => (
    <div className="lc-flex">
        <p>
            We will be gathering at Hidden Park this Sunday. Hopefully streaming from the field goes smoothly.<br/><br/>
            Preacher: Pastor Dan Kasey<br/>
            Title: The Armor of God<br/>
            Scripture reading: Ephesians 6:10-20
        </p>
        <div className="lc-live-stream">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8W0Kz_H4UAE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <h3>If the youtube stream is misbehaving, try viewing it on our <a href="https://www.facebook.com/LifeChurchAyer" target="_blank">Facebook page</a></h3>
        </div>
        <OrderOfService/>
    </div>
);

