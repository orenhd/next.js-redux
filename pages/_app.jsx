import App, { Container } from 'next/app'
import Head from 'next/head'

import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { IntlProvider } from 'react-intl';

import * as i18nService from "../i18n/i18n.service";

const muiTheme = getMuiTheme({ userAgent: (global.navigator && global.navigator.userAgent) ? global.navigator.userAgent : 'all' });

import Application from '../application/application';

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Head>
                    <meta charSet="UTF-8" />
                    <title>Next.js + Redux</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <Provider store={reduxStore}>
                    <IntlProvider locale={i18nService.locale} messages={i18nService.messages} key={i18nService.locale}>
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <Application>
                                <Component {...pageProps} />
                            </Application>
                        </MuiThemeProvider>
                    </IntlProvider>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)