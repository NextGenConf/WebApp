import * as React from "react";
import { ConferenceList } from "./components/ConferenceList";

export default class App extends React.Component {

    render() {
        var testData = [
            {
                id: 1,
                name: "test1",
                start: new Date(),
                end: new Date()
            },
            {
                id: 2,
                name: "test2",
                start: new Date(),
                end: new Date()
            }
        ];

        return (
            <ConferenceList conferences={testData} />
        );
    }
}
