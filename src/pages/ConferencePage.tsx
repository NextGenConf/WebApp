import * as React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SessionList } from "../components/SessionList";
import { Header, Flex } from "@stardust-ui/react";

// TODO: For now we just get all sessions, as we don't have the required mapping service.
const getConferenceSessionsQuery = gql`
  query GetConferenceSessions($conferenceName: String!) {
    getConference(uniqueName: $conferenceName) {
      displayName
      description
    }
    getAllSessions
    {
      uniqueName
      title
      description
      subtitle
      presenterId
      slideDeckUrl
      location
    }
  }
`;

export const ConferencePage: React.FunctionComponent = () => {
    const { conferenceName } = useParams();
    if (!conferenceName) {
        // TODO: Better error handling.
        return <p>Missing useParams</p>;
    }

    const { loading, error, data } = useQuery(getConferenceSessionsQuery, { variables: { conferenceName } });
    if (loading) {
        // TODO: Better loading UI.
        return <p>Loading...</p>;
    }

    if (error) {
        // TODO: Better error handling.
        return <p>Error :(</p>;
    }

    return <Flex gap="gap.small" column>
        <Header content={data.getConference.displayName} description={{content: data.getConference.description, as: 'span'}} />
        <Header content="Sessions:" as="h3" />
        <SessionList conferenceName={conferenceName} sessions={data.getAllSessions} />
    </Flex>;
};
