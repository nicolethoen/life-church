import React from 'react'

interface ServiceItemProps {
    children: React.ReactNode;
    subtext?: React.ReactNode;
    person?: React.ReactNode;
    sermonNotes?: React.ReactNode;
}

const ServiceItem: React.FunctionComponent<ServiceItemProps> = ({ children, subtext = '', person = '', sermonNotes = '' }) => {
    return (
        <div className="lc-service-item">
            <div className="lc-service-item__item">
                {children}
            </div>
            {person && <div className="lc-service-item__person">{person}</div>}
            {subtext && <div className="lc-service-item__subtext">{subtext}</div>}
            {sermonNotes && <div className="lc-service-item__sermon-notes">{sermonNotes}</div>}
        </div>
    );
};
export default ServiceItem;
