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
            <h1>Summer worship update</h1>
            <p>Life Church,</p>
            <p>We appreciate everyone for joining Life Church Sunday Worship Services throughout the course of 2020-2021. We want to inform you that Life Church is planning to change our format for our Sunday worship services on June 6 and 13 and not formally meet for worship from June 20 – August 16. Our current Senior Pastor from our mother church, Faith Evangelical Free Church (FEFC), is retiring this summer, and the church is transitioning to its new Senior Pastor. Some integral members of Life Church are planning to be present at FEFC and support that transition. Life Church hopes to plan other events that will meet in-person throughout the summer. We will send out an email announcement/invitation to those events because we would love you to join us and stay connected with us throughout the summer.</p>
            <p>Also, during this summer, we will be looking for a building for Life Church to meet in. We have some leads, but please feel free to let us know if you know of any good locations.</p>
            <p>We also would like to get your feedback on whether or not you have joined the live stream services and plan to continue doing so. We will only be recording and posting the audio of the services on June 6 and 13, so we encourage you to join us in person. Please let us know if you would be interested in still having the sermons live-streamed in the future and any other feedback you may have. We realize that we have had technical difficulties when we have live-streamed from Hidden Park. It’s often beyond our control when that happens, but we do apologize for that inconvenience.</p>
            <p>Thank you for your continued support. We look forward to connecting with you and the Ayer community this summer.</p>
            <p>Soli Deo Gloria,</p>
            <p>Dan Kasey</p>
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

