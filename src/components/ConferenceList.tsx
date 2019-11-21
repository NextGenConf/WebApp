import * as React from "react";
import { List, Image } from "@stardust-ui/react";
import { Conference } from "../model/Conference";

interface ConferenceListProps {
    conferences: Conference[]
}

export const ConferenceList: React.FunctionComponent<ConferenceListProps> = ({ conferences }: ConferenceListProps) => {
    const conferenceItems = conferences.map((entry) => {
        return {
            key: entry.uniqueName,
            header: entry.displayName,
            media: <Image src={entry.iconUri} height={100} width={100} />,
            headerMedia: entry.startDate + "-" + entry.endDate,
            content: entry.subtitle,
            onClick: () => {
                // TODO: Use react router for navigation.
                window.location.href = window.location.origin + '/' + entry.uniqueName; 
            }
        }
    });

    return <List selectable items={conferenceItems} />
};
