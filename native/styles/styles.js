import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const radius = 50;
module.exports = StyleSheet.create({
  // General BG Style
  bg: {
    backgroundColor: '#0BE3',
  },
  bgImg: {
    flex: 1,
    resizeMode: 'stretch',
  },
  // Containers
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  centerContainerNoMargin: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // Nav
  tabBar: {
    borderTopWidth: 3,
    borderBottomWidth: 1,
    borderColor: '#007AFF',
  },
  navBar: {
    backgroundColor: 'transparent',
  },
  feedNavBar: {
    height: height/10,
  },
  // Lists
  listView: {
    backgroundColor: 'transparent',
    height: 620,
  },
  feedListRow: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DDD3',
  },
  feedListEntryView: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  feedListEntryTextView: {
    flex: 2,
    alignItems: 'center',
    marginRight: 50,
  },
  listEntryView: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#DDD3',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  greyedOutListEntryView: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEE',
  },
  highlightedListEntryView: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BCDAE4',
  },
  greyedOutListEntryViewText: {
    color: '#777',
    justifyContent: 'space-between',
  },
  highlightedListEntryViewText: {
    color: '#023242',
    justifyContent: 'space-between',
  },
  feedHeader: {
    justifyContent: 'flex-end',
  },
  feedText: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
    top: 30,
    fontSize: 24,
    fontFamily: 'DroidSans',
    color: '#FFF4'
  },
  standardText: {
    color: '#FFF',
    fontFamily: 'DroidSans',
  },
  mediumText: {
    color: '#FFF',
    fontFamily: 'DroidSans',
    fontSize: 15,
  },
  rowHeader: {
    color: '#FFF',
    fontFamily: 'DroidSans',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 5,
  },
  // Forms
  userInput: {
    height: 50,
    padding: 4,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#616161',
    borderRadius: 4,
    color: '#616161',
  },
  checkboxEmpty: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  checkboxFilled: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  // Buttons
  socialF: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  socialG: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 50,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  categoryButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  feedNav: {
    backgroundColor: 'green',
    height: 40,
    width: 40,
    alignItems: 'stretch',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  // Profile and Group Pic
  profilePic: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    flex: 1,
  },
  feedEventHostPic: {
    marginLeft: 40,
    alignSelf: 'flex-start',
  },
  inviteeBubbles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 15,
  },
  // Footer
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  // General
  pullRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingRight: 20,
  },
  pullLeft: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  hrule: {
    fontSize: 45,
    bottom: 5,
    color: '#FFF4',
  },
  elipsis: {
    fontSize: 20,
    bottom: 20,
    color: '#FFF4',
    alignSelf: 'flex-end',
  }
});
