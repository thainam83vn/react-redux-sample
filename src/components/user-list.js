import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from './../actions/select-user';

class UserList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map(u => 
                    <li key={u.id} onClick={()=>this.props.selectUser(u)}>{u.name}</li>
                )}
            </ul>
        );
    }
}

// function selectUser(user) {
//     debugger;
//     return {
//         type: "USER_SELECTED",
//         payload: user
//     }
// }

function mapStateToProps(state){
    return {
        users: state.users
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(UserList);