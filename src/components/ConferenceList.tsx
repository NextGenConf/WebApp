import * as React from "react";
import { Conference } from "../model/Conference";
import { ConferenceDetails } from "./ConferenceDetails";

export interface ConferenceListProps {
    conferences: Conference[];
}

export const ConferenceList: React.FunctionComponent<ConferenceListProps> = ({ conferences }: ConferenceListProps) => {
    var conferenceList = conferences.map(function (entry: Conference) {
        return <ConferenceDetails key={entry.id} name={entry.name} startDate={entry.startDate} endDate={entry.endDate} venue={entry.venue} />;
    });

    return <div>{conferenceList}</div>;
};