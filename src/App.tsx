import * as React from "react";
import { ConferenceList } from "./components/ConferenceList";

export default class App extends React.Component {

    testVenue = {
        name: "Venue 1",
        address: {
            addressLine: "1 Silicon Way",
            city: "Silicon Valley",
            country: "United States",
            postalCode: "90210"
        }
    }

    testData = [
        {
            id: "test-conference-1",
            name: "Test Conference 1",
            startDate: new Date(),
            endDate: new Date(),
            venue: this.testVenue
        },
        {
            id: "test-conference-2",
            name: "Test Conference 2",
            startDate: new Date(),
            endDate: new Date(),
            venue: this.testVenue
        }
    ];

    render() {
        return (
            <ConferenceList conferences={this.testData} />
        );
    }
}
