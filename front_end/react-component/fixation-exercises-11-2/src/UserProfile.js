import React from 'react';
import GetImage from './GetImage';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <GetImage source={this.props.user.avatar} alt="User avatar" />
      </div>
    );
  }
}

export default UserProfile;