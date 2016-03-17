import React, {
  View,
  Text,
  TouchableOpacity,
  } from 'react-native';

import { reducer, store } from '../../sharedNative/reducers/reducers.js';

import styles from '../../styles/Social/socialStyles.js';
import NavBar from '../Shared/NavBar.js';
import Groups from './SocialGroups.js';
import Friends from './SocialFriends.js';

const groupsNav = () => {
  store.getState().navigation.navigator.push({
    component: Groups,
  });
};

const Social = (props) => {
  const rightNavButton = {
    title: '>',
    handler: props.swipeRight,
  };
  return (
    <View>
      <NavBar
        title={ 'Social' }
        rightButton={rightNavButton}
      />
    <View>
      <TouchableOpacity>
        <Friends />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={groupsNav}
        style={styles.socialG}
      >
        <Text>GROUPS</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

Social.propTypes = {
  swipeRight: React.PropTypes.function,
};

module.exports = Social;
