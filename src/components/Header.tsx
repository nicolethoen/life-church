import {Link} from "@reach/router";
import React from "react";
import ActionButton from "./ActionButton";
import logoSrc from 'assets/LifeChurchLogo.png';
import { Transition } from 'react-transition-group';
import MenuIcon from 'assets/menu.svg';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = ({}: HeaderProps) => {

    const [inProp, setInProp] = React.useState(false);

    const duration = 300;

    const defaultStyle = {
        transition: `visibility 0s linear 300ms, opacity ${duration}ms ease-in-out`,
        visibility: 'hidden',
        opacity: '0'
    };

    const transitionStyles: any = {
        entering: { visibility: 'visible', opacity: '1', transition: `visibility 0s linear 0s, opacity ${duration}ms ease-in-out` },
        entered:  { visibility: 'visible', opacity: '1', transition: `visibility 0s linear 0s, opacity ${duration}ms ease-in-out` },
        exiting:  { visibility: 'hidden', opacity: '0', transition: `visibility 0s linear 300ms, opacity ${duration}ms ease-in-out` },
        exited:  { visibility: 'hidden', opacity: '0', transition: `visibility 0s linear 300ms, opacity ${duration}ms ease-in-out` },
    };

    return (
        <header>
            <div className="lc-logo">
                <Link to="/"><img src={logoSrc} height="100"/></Link>
            </div>
            <div className="lc-menu-toggle lc-link" onClick={() => setInProp(true)}>
               <MenuIcon />
            </div>
            <div className="lc-action-buttons">
                <ActionButton className="primary">
                    <Link to="/order-of-service">Order of service</Link>
                </ActionButton>
                <ActionButton>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link" target="_blank">Visitor Form</a>
                </ActionButton>
            </div>
            <div className="lc-menu">
                <ul>
                    <li>
                        <Link to="/announcement-flyer">Announcements</Link>
                    </li>
                    <li>
                        <Link to="/facebook-feed">Facebook feed</Link>
                    </li>
                    <li>
                        <Link to="/stone-soup">Support Stone Soup</Link>
                    </li>
                    <li>
                        <Link to="/sermons">Sermons</Link>
                    </li>
                </ul>
            </div>
            <Transition in={inProp} timeout={duration}>
                {(state: string) => (
                    <div className={`lc-mobile-menu fade fade-${state}`}
                         style={{
                             ...defaultStyle,
                             ...transitionStyles[state]
                         }}>
                        <span className='lc-mobile-menu__close' onClick={() => setInProp(false)}>
                            X
                        </span>
                        <ul>
                            <li>
                                <Link to="/announcement-flyer" onClick={() => setInProp(false)}>Announcements</Link>
                            </li>
                            <li>
                                <Link to="/facebook-feed" onClick={() => setInProp(false)}>Facebook feed</Link>
                            </li>
                            <li>
                                <Link to="/stone-soup" onClick={() => setInProp(false)}>Support Stone Soup</Link>
                            </li>
                            <li>
                                <Link to="/sermons" onClick={() => setInProp(false)}>Sermons</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>

        </header>
    );
};

export default Header;