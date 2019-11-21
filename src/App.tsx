import * as React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ConferenceList } from "./components/ConferenceList";
import { SessionList } from "./components/SessionList";

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/' }),
    cache: new InMemoryCache()
});

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <ConferenceList />
                <SessionList />
            </ApolloProvider>
        );
    }
}
