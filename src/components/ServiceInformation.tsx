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
        <div className="lc-highlight-large" id="service-information">
            <h1>Service Information</h1>
            <p>Sunday Mornings at 10:30am</p>
            <p>
                We do not yet have a designated indoor space to meet. The pandemic has slowed our search, since meeting indoors is not as much of an option.
            </p>
            <p>
                Currently, we stream the services on Facebook and YouTube each Sunday. If we are not meeting in person, once the virtual Sunday service is over we gather on Zoom for a time of fellowship.
            </p>
            <p>
                Now that it is spring, whenever the weather forecast seems to allow it, we will additionally gather outside at The Hidden Park in Devens, MA. We will still stream the services for those unable to attend when meeting in person. Outdoor worship services will be announced via email and on our Facebook page.
            </p>
            <p className="lc-outdoor-location">

                {smallVideo ? (
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2445339800483!2d-71.61165464882482!3d42.5501002309691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3eb055d5357a3%3A0xfee010927702a67e!2sThe%20Hidden%20Park!5e0!3m2!1sen!2sus!4v1616867869897!5m2!1sen!2sus"
                        width="400" height="300" style={{"border":"0"}} allowFullScreen={false} loading="lazy" />
                ) : (
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2447200697047!2d-71.61164928453765!3d42.5500962791746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3eb055d5357a3%3A0xfee010927702a67e!2sThe%20Hidden%20Park!5e0!3m2!1sen!2sus!4v1616811297797!5m2!1sen!2sus"
                        width="600" height="450" style={{"border":"0"}} allowFullScreen={false} loading="lazy" />
                )}
            </p>
        </div>
    );
};

