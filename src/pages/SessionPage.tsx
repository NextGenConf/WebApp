import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Header } from "@stardust-ui/react";

// TODO: This needs to be parameterized per conference, but the api support is needed first.
const getSessionQuery = gql`
  query GetSession($sessionName: String!) {
    getSession(uniqueName: $sessionName) {
      title
      description
      subtitle
      presenterId
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

  const { loading, error, data } = useQuery(getSessionQuery, {
    variables: { sessionName }
  });
  if (loading) {
    // TODO: Better loading UI.
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO: Better error handling.
    return <p>Error :(</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
      }}
    >
      <Header
        content={data.getSession.title}
        description={{ content: data.getSession.subtitle, as: "span" }}
      />
      <p>Description: {data.getSession.description}</p>
      <p>Location: {data.getSession.location}</p>
      <p>Presented by: {data.getSession.presenterId}</p>
    </div>
  );
};
