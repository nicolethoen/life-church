import React from 'react'
import FacebookPost from "components/FacebookPost";

export const FacebookFeed: React.FunctionComponent = ({}) => {

    const [feedItemWidth, setFeedItemWidth] = React.useState(0);

    React.useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setFeedItemWidth(window.innerWidth < 600 ? window.innerWidth - 20 : 580);
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <div className="lc-facebook-feed">
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F176248987500930&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=528`}
                    width={feedItemWidth} height="528" style={{ border:'none', overflow:'hidden' }} scrolling="no" frameBorder={0}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F170503711408791&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=557`}
                    width={feedItemWidth} height="557" style={{ border:'none', overflow:'hidden' }} scrolling="no" frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F160675805724915&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=468`}
                    width={feedItemWidth}
                    height="475"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F161920842267078&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=238`}
                    width={feedItemWidth}
                    height="238"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F158795292579633&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=579`}
                    width={feedItemWidth}
                    height="600"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F158169699308859&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=580`}
                    width={feedItemWidth}
                    height="580"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153750056417490&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=578`}
                    width={feedItemWidth}
                    height="590"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153749486417547&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=735`}
                    width={feedItemWidth}
                    height="765"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
        </div>
    );
}
