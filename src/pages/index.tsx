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
            {smallVideo ? (
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F157283136064182&show_text=true&width=480&appId=612285882769039&height=498"
                    width="480" allow="encrypted-media"
                    height="500" style={{border:"none",overflow:"hidden"}} />
            ) : (
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F157283136064182&show_text=true&width=552&appId=612285882769039&height=498"
                    width="552" allow="encrypted-media"
                    height="500" style={{border:"none",overflow:"hidden"}} />
            )}
        </div>
    )
}
