import * as React from "react";
import { ConferenceList } from "../components/ConferenceList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getConferencesQuery = gql`
  {
    getConferences {
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
  }
`;

export const FeedPage: React.FunctionComponent = () => {
    const { loading, error, data } = useQuery(getConferencesQuery);
    if (loading) {
        //TODO: Better loading UI.
        return <p>Loading...</p>;
    }

    if (error) {
        //TODO: Better error handling.
        return <p>Error :(</p>;
    }

    return <ConferenceList conferences={data.getConferences} />;
};
