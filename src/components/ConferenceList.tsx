import * as React from "react";
import { List, Image } from "@stardust-ui/react";
import { useHistory } from 'react-router-dom';
import { Conference } from "../model/Conference";

interface ConferenceListProps {
    conferences: Conference[]
}

export const ConferenceList: React.FunctionComponent<ConferenceListProps> = ({ conferences }: ConferenceListProps) => {
    const history = useHistory();
    const conferenceItems = conferences.map((entry) => {
        return {
            key: entry.uniqueName,
            header: entry.displayName,
            media: <Image src={entry.iconUri} height={100} width={100} />,
            headerMedia: entry.startDate + "-" + entry.endDate,
            content: entry.subtitle,
            onClick: () => {
                history.push('/conference/' + entry.uniqueName);
            }
        }
    });

    return <List selectable items={conferenceItems} />
};
