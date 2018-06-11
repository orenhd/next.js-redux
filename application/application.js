import React, { Component } from "react";

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import PropTypes from "prop-types";

import {FormattedMessage, FormattedDate} from 'react-intl';
import { $t } from '../i18n/i18n.service';

import Link from 'next/link';

import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

import styles from './_application.scss';

class Application extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    /* Class Methods */

    handleToggle = () => this.setState({ open: !this.state.open});
    handleDrawerRequestChange = (open) => this.setState({open});
    handleClose = () => this.setState({ open: false });

    render() {
        const { activePageRoute, isPageRenderedOnServer, userName } = this.props;

        const clickingExampleAnchorClass = classNames({
            [styles.navLinkActive]: activePageRoute === 'clicking-example'
        });

        const topTwentylbumsAnchorClass = classNames({
            [styles.navLinkActive]: activePageRoute === 'top-twenty'
        });
        
        return <div className="application">
        <AppBar
            title={userName ? $t.formatMessage({ id: 'general.greeting' }, {userName}) : ''}
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={<FontIcon className={`material-icons ${styles.appBarRenderIndicator}`} color="white">
                {isPageRenderedOnServer ? 'public' : 'portrait'}
            </FontIcon>}
        />
        <Drawer 
            className={styles.appDrawer}
            docked={false} 
            open={this.state.open}
            onRequestChange={this.handleDrawerRequestChange}
        >
          <MenuItem className={styles.menuItemTitle}>
                <FormattedMessage id="general.navigation" />
          </MenuItem>
          <Link href="/clicking-example">
            <a 
                className={clickingExampleAnchorClass}
            >
                <MenuItem 
                    onClick={this.handleClose}
                    leftIcon={<FontIcon className="material-icons">mouse</FontIcon>} 
                >
                    <FormattedMessage id="clickingExample.clickingExample" />
                </MenuItem>
            </a>
          </Link>
          <Link href="/top-twenty">
            <a
                className={topTwentylbumsAnchorClass}
            >
                <MenuItem
                    onClick={this.handleClose}
                    leftIcon={<FontIcon className="material-icons">album</FontIcon>} 
                >
                    <FormattedMessage id="topTwentyAlbums.topTwentyAlbums" />
                </MenuItem>
            </a>
          </Link>
        </Drawer>
        {this.props.children}
        </div>;
    }
}

Application.propTypes = {
    activePageRoute: PropTypes.string,
    isPageRenderedOnServer: PropTypes.bool,
    userName: PropTypes.string
}

const mapStateToProps = (state) => {
    const { application, clickingExample } = state;
    const { activePageRoute, isPageRenderedOnServer } = application;
    const { userName } = clickingExample;
    return {
        activePageRoute,
        isPageRenderedOnServer,
        userName
    }
}

export default connect(mapStateToProps, {})(Application);