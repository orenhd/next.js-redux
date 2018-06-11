import React, { PureComponent } from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { setUserName, updateClickingData } from './clickingExample.actions';

import * as dataTypes from './clickingExample.dataTypes';

import { ClickCountTypesEnum } from '../../shared/enums';

import UserNameBar from './components/userNameBar';
import ClickingPanel from './components/clickingPanel';

class ClickingExample extends PureComponent {

    /* Class Methods */

    setUserName = (userName) => {
        this.props.setUserName(userName);
    }

    homeButtonClicked = () => {
        this.props.updateClickingData(ClickCountTypesEnum.homeButtonClick);
    }

    homeButtonClickedOutside = () => {
        this.props.updateClickingData(ClickCountTypesEnum.homeButtonClickOutside);
    }

    render() {
        return <div className="clicking-example margined-content">
            <UserNameBar 
                userName={this.props.userName} 
                userNameChangedHandler={this.setUserName}
            />
            <ClickingPanel
                clickingData={this.props.clickingData}
                homeButtonClickedHandler={this.homeButtonClicked}
                homeButtonClickedOutsideHandler={this.homeButtonClickedOutside}
            />
        </div>
    }
}

ClickingExample.propTypes = {
    userName: PropTypes.string,
    clickingData: dataTypes.ClickingData,
    setUserName: PropTypes.func,
    updateClickingData: PropTypes.func
}

const mapStateToProps = (state) => {
    const { clickingExample } = state;
    const { userName, clickingData } = clickingExample;
    return {
        userName,
        clickingData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setUserName,
        updateClickingData
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickingExample);