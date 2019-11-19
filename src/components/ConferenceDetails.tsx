import * as React from 'react';
import { Venue } from '../model/Venue';

interface ConferenceDetailsProps {
    name: string;
    startDate: Date;
    endDate: Date;
    venue: Venue;
}

export const ConferenceDetails: React.FunctionComponent<ConferenceDetailsProps> = ({ name, startDate, endDate, venue }) =>
    <div>
        <div>Name: {name}</div>
        <div>Starts on: {startDate.toDateString()}</div>
        <div>Ends on: {endDate.toDateString()}</div>
        <div>Venue: {venue.name} - {venue.address.addressLine}, {venue.address.city}, {venue.address.country}, {venue.address.postalCode}</div>
    </div>;
