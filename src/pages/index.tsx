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
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F164625271996635&show_text=true&width=400&appId=612285882769039&height=536"
                    width="400" allow="encrypted-media"
                    height="581" style={{border:"none",overflow:"hidden"}} />
            ) : (
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F164625271996635&show_text=true&width=552&appId=612285882769039&height=536"
                    width="552" height="536" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0"
                    allow="encrypted-media" />
            )}
        </div>
    )
}
