import * as React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Switch } from "react-router-dom";
import { ConferencesPage } from "./pages/ConferencesPage";
import { ConferencePage } from "./pages/ConferencePage";

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/' }),
    cache: new InMemoryCache()
});

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Switch>
                    <Route exact path="/" component={ConferencesPage} />
                    <Route path="/api/conference/:uniqueName" component={ConferencePage} />
                </Switch>
            </ApolloProvider>
        );
    }
}
