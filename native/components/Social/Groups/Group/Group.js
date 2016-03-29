import React, { View, Text, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import { reducer, store } from '../../../../sharedNative/reducers/reducers.js';
const actions = require('../../../../sharedNative/actions/actions.js');
import NavBar from '../../../Shared/NavBar.js';
import styles from '../../../../styles/Social/socialStyles.js';
import feedStyles from '../../../../styles/Feed/feedStyles.js';
import AddMembers from './AddMembers.js';
import CirclePic from '../../../Shared/CirclePic';
import { makeClickableRow, makeListContainer, UserList } from '../../../Shared/ComponentHelpers.js';
import { exitButton, enterButton } from '../../../Shared/Buttons.js';
import { navToFull } from '../../../Shared/NavHelpers.js';
const SelectProfilePic = require('../../../Profile/SelectProfilePic');

const currentGroup = (members) => {
  store.dispatch(actions.setUserGroupMembers(members));
};

const getGroups = (id) => {
  store.dispatch(actions.getUserGroups())
  .then((groups) => {
    currentGroup(groups[id]);
  });
};

const Group = (props) => {
  getGroups(props.route.focus.id);
  const listGroupMembers = (member) => {
    console.log(`You clicked on ${member.groupId}, id:${member.id}`);
  };

  const GroupListContainer = makeListContainer(
    makeClickableRow(listGroupMembers, null, null, null, true),
    ['userGroupMembers'],
    UserList
  );

  const changeGroupPic = encodedImage => {
    store.dispatch(actions.updateGroupPic(props.route.focus.id, encodedImage))
    .then(newPicLink => {props.route.focus.groupPictureUri = newPicLink;});
  };

  return (
    <View>
      <NavBar
        title={ props.route.focus.name }
        leftButton={exitButton}
        rightButton={enterButton(AddMembers, props.route.focus)}
      />
      <TouchableOpacity onPress={() => navToFull({
        component: SelectProfilePic,
        onSubmit: changeGroupPic,
      })}
      >
        <CirclePic uri={props.route.focus.groupPictureUri} />
      </TouchableOpacity>
      <GroupListContainer />
    </View>
  );
};

Group.propTypes = {
  route: React.PropTypes.object,
};

module.exports = Group;
