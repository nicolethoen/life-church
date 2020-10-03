import React from "react";

interface ActionButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({children = '', className = ''}) => {
    return (
        <div className={`lc-action-buttons__button ${className}`}>
            {children}
        </div>
    );
};
export default ActionButton;