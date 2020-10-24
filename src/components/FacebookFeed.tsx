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
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F153740766418419&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=715`}
                    width={feedItemWidth}
                    height="715"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F150856230040206&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=345`}
                    width={feedItemWidth}
                    height="365"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F150842446708251&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=572`}
                    width={feedItemWidth}
                    height="585"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F149673373491825&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=576`}
                    width={feedItemWidth}
                    height="585"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148928983566264&show_text=true&width=${feedItemWidth}&appId=612285882769039&height=527`}
                    width={feedItemWidth}
                    height="527"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148678036924692&show_text=true&width=${feedItemWidth}&appId=540151866036099&height=557`}
                    width={feedItemWidth}
                    height="585"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
            <FacebookPost>
                <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLifeChurchAyer%2Fposts%2F148269636965532&show_text=true&width=${feedItemWidth}&appId=540151866036099&height=716`}
                    width={feedItemWidth}
                    height="750"
                    style={{ border:'none', overflow:'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"/>
            </FacebookPost>
        </div>
    );
}
