import * as React from "react";
import { Session } from "../model/Session";
import { SessionDetails } from "./SessionDetails";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getAllSessionsQuery = gql`
  {
    getAllSessions
    {
      uniqueName
      title
      description
      presenterId
      location
    }
  }
`;

export const SessionList: React.FunctionComponent = () => {
    const { loading, error, data } = useQuery(getAllSessionsQuery);
    if (loading) return <p>Loading...</p>; //TODO: Better loading behaviour.
    if (error) return <p>Error :(</p>; //TODO: Better error handling.

    var sessionList = data.getAllSessions.map(function (entry: Session) {
        return <SessionDetails key={entry.uniqueName} name={entry.title} description={entry.description} presenterId={entry.presenterId} location={entry.location} />;
    });

    return <div>{sessionList}</div>;
};
