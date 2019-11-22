import * as React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SessionList } from "../components/SessionList";

// TODO: This needs to be parameterized per conference, but the api support is needed first.
const getSessionQuery = gql`
  query GetSession($sessionName: String!) {
    getSession(uniqueName: $sessionName)
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

export const SessionPage: React.FunctionComponent = () => {
    const { conferenceName, sessionName } = useParams();
    if (!conferenceName || !sessionName) {
        // TODO: Better error handling.
        return <p>Missing useParams</p>;
    }

    const { loading, error, data } = useQuery(getSessionQuery, { variables: { sessionName } });
    if (loading) {
        //TODO: Better loading UI.
        return <p>Loading...</p>;
    }

    if (error) {
        //TODO: Better error handling.
        return <p>Error :(</p>;
    }

    // TODO: We don't need a SessionList here, but since it's already styled I'm using it as a placeholder.
    return <div>
        <SessionList conferenceName={conferenceName} sessions={[data.getSession]} />
    </div>;
};
