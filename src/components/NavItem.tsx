import React from 'react'
import {Link} from "@reach/router";
import ActionButton from "./ActionButton";
import { Transition } from 'react-transition-group';

interface NavItemProps {
    linkTo?: string;
    href?: string;
    itemText: React.ReactNode;
    submenuItems?: React.ReactNode[];
    isSubMenuItem?: boolean;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({ linkTo = "", href = "", itemText, isSubMenuItem = false, submenuItems = [] as React.ReactNode[] }) => {

    const [showSubmenu, setShowSubmenu] = React.useState(false);
    const hasSubMenu = submenuItems.length > 0;

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

    return isSubMenuItem ? (
        <div className={"lc-menu-item" + (inProp ? " focused" : "")}
            onMouseEnter={() => setInProp(true)}
            onMouseLeave={() => setInProp(false)}
        >
            {linkTo && (
                <Link className="lc-menu-item-submenu-link" to={linkTo}>{itemText}</Link>
            )}
            {href && (
                <a href={href} target="_blank">{itemText}</a>
            )}
        </div>
    ) : (
        <li className={"lc-menu-item" + (inProp ? " focused" : "")}
            onMouseEnter={() => setInProp(true)}
            onMouseLeave={() => setInProp(false)}
        >
            {hasSubMenu && (
                <div
                    className="lc-menu-item-link"
                    tabIndex={0}
                    //onKeyDown={() => setInProp(!inProp)}
                >{itemText}</div>
            )}
            {linkTo && (
                <Link className="lc-menu-item-link" to={linkTo}>{itemText}</Link>
            )}
            {href && (
                <a href={href} target="_blank">{itemText}</a>
            )}
            {submenuItems.length > 0 && (
                <Transition in={inProp} timeout={duration}>
                    {(state: string) => (
                        <div className={`lc-menu-item-submenu fade fade-${state}`}
                             style={{
                                 ...defaultStyle,
                                 ...transitionStyles[state]
                             }}>
                            {submenuItems}
                        </div>
                    )}
                </Transition>
            )}
        </li>
    );
};
export default NavItem;
