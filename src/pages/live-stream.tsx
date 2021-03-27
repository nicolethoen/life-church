import React from 'react'

export default () => (
    <div className="lc-live-stream">
        <h1>Live stream for March 28th!</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ix8TKa0Ven0" title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
        <h3>If the youtube stream is misbehaving, try viewing it on our <a href="https://www.facebook.com/LifeChurchAyer" target="_blank">Facebook page</a></h3>
    </div>
);

