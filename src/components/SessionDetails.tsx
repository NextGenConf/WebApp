import * as React from 'react';

interface SessionDetailsProps {
    name: string;
    description: string;
    presenterId: string;
    location: string;
}

export const SessionDetails: React.FunctionComponent<SessionDetailsProps> = ({ name, description, presenterId, location }) =>
    <div>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <div>Presenter: {presenterId}</div>
        <div>Location: {location}</div>
    </div>;
