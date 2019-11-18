import * as React from 'react';

interface ConferenceDetailsProps {
    name: string;
    start: Date;
    end: Date;
}

export const ConferenceDetails: React.FunctionComponent<ConferenceDetailsProps> = ({ name, start, end }: ConferenceDetailsProps) =>
    <li>
        <div>Name: {name}</div>
        <div>Starts on: {start.toDateString()}</div>
        <div>Ends on: {end.toDateString()}</div>
    </li>;
