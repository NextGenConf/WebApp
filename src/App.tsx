import * as React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Switch } from "react-router-dom";
import { FeedPage } from "./pages/FeedPage";
import { ConferencePage } from "./pages/ConferencePage";
import { SessionPage } from "./pages/SessionPage";

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/' }),
    cache: new InMemoryCache()
});

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Switch>
                    <Route path="/api/conference/:conferenceName/session/:sessionName" component={SessionPage} />
                    <Route path="/api/conference/:conferenceName" component={ConferencePage} />
                    <Route exact path="/" component={FeedPage} />
                </Switch>
            </ApolloProvider>
        );
    }
}
