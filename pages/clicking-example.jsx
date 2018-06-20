import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActivePageRoute, setIsPageRenderedOnServer } from '../application/application.actions';

import ClickingExample from '../modules/clickingExample/clickingExample';

class ClickingExamplePage extends Component {
    static async getInitialProps({ reduxStore, req }) {
        const isServer = !!req

        reduxStore.dispatch(setActivePageRoute('clicking-example'));
        reduxStore.dispatch(setIsPageRenderedOnServer(isServer));

        return {}
    }

    render() {
        return (
            <ClickingExample />
        )
    }
}

export default connect()(ClickingExamplePage)