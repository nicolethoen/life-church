import React from 'react'
import {Link} from "@reach/router";
import ActionButton from "./ActionButton";

interface NavItemProps {
    linkTo?: string;
    href?: string;
    itemText: React.ReactNode;
    submenuItems?: React.ReactNode[];
}

const NavItem: React.FunctionComponent<NavItemProps> = ({ linkTo = "", href = "", itemText, submenuItems = [] as React.ReactNode[] }) => {

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

    return (
        <li className="lc-menu-item">
            {hasSubMenu && (
                <div className="lc-menu-item-link" tabIndex={0} onClick={() => setInProp(!inProp)}>{itemText}</div>
            )}
            {linkTo && (
                <Link className="lc-menu-item-link" to={linkTo}>{itemText}</Link>
            )}
            {href && (
                <a href={href} target="_blank">{itemText}</a>
            )}
            <Transition in={inProp} timeout={duration}>
                {(state: string) => ()}
            </Transition>
        </li>
    );
};
export default NavItem;
