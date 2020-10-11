import React from 'react'

export default () => {

    const [frameWidth, setFrameWidth] = React.useState(0);
    const [frameHeight, setFrameHeight] = React.useState(0);

    React.useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setFrameWidth(window.innerWidth < 800 ? window.innerWidth - 20 : 760);
            setFrameHeight(window.innerWidth < 800 ? window.innerWidth * .67 : 515);
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
            <iframe width={frameWidth} height={frameHeight} src="https://www.youtube.com/embed/JyFmX48wHlQ" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}
