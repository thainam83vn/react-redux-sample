import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserDetail extends React.Component {
    render() {
        if (!this.props.activeUser){
            return null;
        }

        return (
            <div>
                <div>Name:{this.props.activeUser.name}</div>
                <div>Age:{this.props.activeUser.age}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        activeUser: state.activeUser
    }
}

export default  connect(mapStateToProps)(UserDetail);