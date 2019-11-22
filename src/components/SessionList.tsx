import * as React from "react";
import { List } from "@stardust-ui/react";
import { useHistory } from 'react-router-dom';
import { Session } from "../model/Session";

interface SessionListProps {
    conferenceName: string,
    sessions: Session[]
}

export const SessionList: React.FunctionComponent<SessionListProps> = ({ conferenceName, sessions }: SessionListProps) => {
    const history = useHistory();
    const sessionItems = sessions.map((entry) => {
        return {
            key: entry.uniqueName,
            header: entry.title,
            content: entry.subtitle,
            onClick: () => {
                history.push('/conference/' + conferenceName + "/session/" + entry.uniqueName);
            }
        }
    });

    return <List selectable items={sessionItems} />
};
