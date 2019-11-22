import * as React from "react";
import { ConferenceList } from "../components/ConferenceList";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SessionList } from "../components/SessionList";

// TODO: For now we just get all sessions, as we don't have the required mapping service.
const getConferenceSessionsQuery = gql`
  query GetConferenceSessions($uniqueName: String!) {
    getConference(uniqueName: $uniqueName) {
      uniqueName
      displayName
      startDate
      endDate
      subtitle
      iconUri
      venue {
        name
        address {
          addressLine
          city
          country
          postalCode
        }
      }
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
    const { uniqueName } = useParams();
    if (!uniqueName)
    {
        // TODO: Better error handling.
        return <p>Missing useParams</p>;
    }

    const { loading, error, data } = useQuery(getConferenceSessionsQuery, { variables: { uniqueName } });
    if (loading) {
        //TODO: Better loading UI.
        return <p>Loading...</p>;
    }

    if (error) {
        //TODO: Better error handling.
        return <p>Error :(</p>;
    }

    // TODO: We don't need a ConferenceList here, but since it's already styled I'm using it as a placeholder.
    return <div>
        <ConferenceList conferences={[data.getConference]} />
        <SessionList conferenceName={uniqueName} sessions={data.getAllSessions} />
    </div>;
};
