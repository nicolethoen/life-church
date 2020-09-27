import React from 'react'

interface SermonProps {
    children: React.ReactNode;
    link: string;
}

const Sermon: React.FunctionComponent<SermonProps> = ({ children, link }) => {
    return <a className="lc-sermons__link" href={link}>{children}</a>;
};
export default Sermon;
