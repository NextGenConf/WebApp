import * as React from "react";
import { Conference } from "../model/Conference";
import { ConferenceDetails } from "./ConferenceDetails";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getConferencesQuery = gql`
  {
    getConferences {
      uniqueName
      displayName
      iconUri
      description
      subtitle
      startDate
      endDate
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

export const ConferenceList: React.FunctionComponent = () => {
    const { loading, error, data } = useQuery(getConferencesQuery);
    if (loading) return <p>Loading...</p>; //TODO: Better loading behaviour.
    if (error) return <p>Error :(</p>; //TODO: Better error handling.

    var conferenceList = data.getConferences.map(function (entry: Conference) {
        return <ConferenceDetails key={entry.uniqueName} name={entry.displayName} startDate={entry.startDate} endDate={entry.endDate} venue={entry.venue} />;
    });

    return <div>{conferenceList}</div>;
};
