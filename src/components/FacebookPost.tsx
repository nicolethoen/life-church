import React from 'react'

interface FacebookPostProps {
    children: React.ReactNode;
}

const FacebookPost: React.FunctionComponent<FacebookPostProps> = ({ children }) => {
    return (
        <div className="lc-facebook-feed__post">{children}</div>
    );
};
export default FacebookPost;
