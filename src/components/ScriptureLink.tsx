import React from 'react'
import ScriptureDecorator from "./ScriptureDecorator";
import CloseIcon from 'assets/close.svg';

interface ScriptureLinkProps {
    reference: React.ReactNode;
    text: React.ReactNode;
}

const ScriptureLink: React.FunctionComponent<ScriptureLinkProps> = ({ reference, text }) => {
    const [openPassage, setOpenPassage] = React.useState(false);

    return (
        <div className="lc-scripture-link">
            <span className="lc-link" onClick={() => setOpenPassage(true)}>{reference}</span>
            {openPassage && (
                <div className="lc-pop-up">
                    <div className="lc-pop-up__content">
                        <div className="lc-pop-up__modal">
                            <button className="lc-pop-up__close" onClick={() => setOpenPassage(false)}><CloseIcon /></button>
                            <ScriptureDecorator variant="reference">{reference}</ScriptureDecorator>
                            {text}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ScriptureLink;
