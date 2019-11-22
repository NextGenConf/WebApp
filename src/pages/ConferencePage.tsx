import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SessionList } from "../components/SessionList";
import { Header, Flex, Image } from "@stardust-ui/react";

// TODO: For now we just get all sessions, as we don't have the required mapping service.
const getConferenceSessionsQuery = gql`
  query GetConferenceSessions($conferenceName: String!) {
    getConference(uniqueName: $conferenceName) {
      displayName
      description
      iconUri
    }
    getAllSessions {
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

  const { loading, error, data } = useQuery(getConferenceSessionsQuery, {
    variables: { conferenceName }
  });
  if (loading) {
    // TODO: Better loading UI.
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    // TODO: Better error handling.
    return <p>Error :(</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `
        'icon description description'
        'sessions sessions sessions'
        `
      }}
    >
      <Image
        src={data.getConference.iconUri}
        height={250}
        width={250}
        styles={{ padding: "20px", gridArea: "icon" }}
      />

      <Flex gap="gap.small" column styles={{ gridArea: "description", paddingTop: "20px", paddingRight: "50px" }}>
        <Header
          content={data.getConference.displayName}
          description={{ content: data.getConference.description, as: "span" }}
        />
        <Header content="Sessions:" as="h3" />
        <div style={{ gridArea: "sessions" }}>
          <SessionList
            conferenceName={conferenceName}
            sessions={data.getAllSessions}
          />
        </div>
      </Flex>
    </div>
  );
};
