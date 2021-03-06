import React, { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';

const GroupsListRow = (rowText) => (
  <View>
    <View style={styles.listEntryView}>
      <Text style={styles.group}>
        {rowText}
      </Text>
    </View>
  </View>
);

module.exports = GroupsListRow;
