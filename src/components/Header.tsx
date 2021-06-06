import {Link} from "@reach/router";
import React from "react";
import logoSrc from 'assets/LifeChurchLogo.png';
import { Transition } from 'react-transition-group';
import MenuIcon from 'assets/menu.svg';
import NavItem from "./NavItem";

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
                <Link to="/"><img src={logoSrc} height="100" aria-label="Life Church Logo - link to home page"/></Link>
            </div>
            <div className="lc-menu-toggle lc-link" onClick={() => setInProp(true)}>
               <MenuIcon />
            </div>
            <div className="lc-menu" role="navigation">
                <ul aria-label="Navigation">
                    <NavItem itemText="Sunday Worship" submenuItems={[
                        <NavItem itemText="Service Information" linkTo="/service-information" isSubMenuItem key={1} />,
                        <NavItem itemText="Sermons" linkTo="/sermons" isSubMenuItem key={2} />,
                        <NavItem itemText="Service Sign Up" href="https://docs.google.com/spreadsheets/d/1A57V2SGXO3aKTPP3lzzXZ6tkKFnnomvZ/edit" isSubMenuItem key={3} />
                    ]}/>
                    <NavItem itemText="Announcements" submenuItems={[
                        <NavItem itemText="Give Online" href="https://tithe.ly/give?c=1445617" isSubMenuItem key={0} />,
                        <NavItem itemText="Stone Soup" linkTo="/stone-soup" isSubMenuItem key={1} />,
                        <NavItem itemText="Latest Announcements" linkTo="/announcement-flyer" isSubMenuItem key={2} />
                    ]}/>
                    <NavItem itemText="Events" linkTo="/calendar"/>
                    <NavItem itemText="Contact us" submenuItems={[
                        <NavItem itemText="Visitor Form" href="https://docs.google.com/forms/d/e/1FAIpQLSfRs3sY8J1ZVmjuy_rDzRjs6VI44ywHEFN__nbeRk8wdk2WOA/viewform?usp=sf_link" isSubMenuItem key={0} />,
                        <NavItem itemText="Facebook page" href="https://www.facebook.com/LifeChurchAyer" isSubMenuItem key={1} />
                    ]}/>
                </ul>
            </div>
            <Transition in={inProp} timeout={duration}>
                {(state: string) => (
                    <div className={`lc-mobile-menu fade fade-${state}`}
                         role="navigation"
                         style={{
                             ...defaultStyle,
                             ...transitionStyles[state]
                         }}>
                        <span className='lc-mobile-menu__close' onClick={() => setInProp(false)}>
                            X
                        </span>
                        <ul>
                            <li>
                                <Link to="/service-information" onClick={() => setInProp(false)}>Service Information</Link>
                            </li>
                            <li>
                                <Link to="/stone-soup" onClick={() => setInProp(false)}>Support Stone Soup</Link>
                            </li>
                            <li>
                                <Link to="/sermons" onClick={() => setInProp(false)}>Sermons</Link>
                            </li>
                            <li>
                                <Link to="/calendar" onClick={() => setInProp(false)}>Events</Link>
                            </li>
                            <li>
                                <a href="https://tithe.ly/give?c=1445617">Give Online</a>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>

        </header>
    );
};

export default Header;