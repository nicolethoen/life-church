import React from 'react'

export default () => {

    const [smallVideo, setSmallVideo] = React.useState(false);

    React.useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setSmallVideo(window.innerWidth < 800);
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <div className="lc-welcome-message">
            <h1><a href="https://youtu.be/wJLzxPYHfLE" target="_blank">Click HERE to join our live stream for Dec 13th!</a></h1>
            <h3>If the youtube stream is misbehaving, try viewing it on our <a href="https://www.facebook.com/LifeChurchAyer" target="_blank">Facebook page</a></h3>
        </div>
    )
}
