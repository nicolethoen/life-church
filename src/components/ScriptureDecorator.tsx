import React from 'react'

interface ScriptureDecoratorProps {
    children: React.ReactNode;
    variant: string;
}

const ScriptureDecorator: React.FunctionComponent<ScriptureDecoratorProps> = ({ children, variant }) => {
    if (variant === 'chapter') {
        return <h2 className="lc-scripture-decorator">{children}</h2>
    } else if (variant === 'reference') {
        return <h1 className="lc-scripture-decorator">{children}</h1>
    }
    return <span className="lc-scripture-decorator">{children}</span>;
};
export default ScriptureDecorator;
