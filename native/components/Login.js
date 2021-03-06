import React, {
  Alert,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
const localStore = require('react-native-simple-store');

import { store } from '../sharedNative/reducers/reducers';
import { attemptLogin, createUser } from '../sharedNative/actions/actions';
import { navToFull } from './Shared/NavHelpers';
import MainContainer from './MainContainer';
import { OpenDoor } from './Shared/Icons';
import Button from './Shared/Button';
import styles from '../styles/styles';
const actions = require('../sharedNative/actions/actions');
const nameText = require('../ios/opendoor/opendoortext.png');
const logo = require('../ios/opendoor/opendoorlogo.png');
import { BackgroundImage } from './Shared/BackgroundImage.js';

const { height, width } = Dimensions.get('window');

const Login = class Login extends React.Component {
  constructor(props) {
    super(props);
    this.updateFormProp = this.updateFormProp.bind(this);
    this.loginToApp = this.loginToApp.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }
  componentWillMount() {
    this.setState({
      phone: '',
      userName: '',
      password: '',
    });
    store.dispatch(actions.checkForJwtAndLogin());
  }
  displayAlert(title, subTitle = '', text = 'OK', onPress = () => null) {
    Alert.alert(title, subTitle, [{ text, onPress, style: 'default' }]);
  }
  navigateToLoggedInApp() {
    navToFull({ name: 'Main' });
  }
  loginToApp() {
    const sanitizedPhone = this.state.phone.replace(/\D/igm, '').replace(/1(?=\d{9})/igm, '');
    this.setState({ phone: sanitizedPhone });
    store.dispatch(attemptLogin(this.state.userName, this.state.password))
    .then(res => {
      if (res.err) {
        switch (res.err.status) {
          case 401: {
            this.displayAlert('Invalid Credentials');
            break;
          }
          default:
            this.displayAlert('Unknown Server Error', 'Try again later');
            break;
        }
      } else {
        // Set JWT to state
        this.navigateToLoggedInApp();
      }
    })
    .catch((err) => {
      console.warn(err);
    });
  }
  signupUser() {
    const sanitizedPhone = this.state.phone.replace(/\D/igm, '');
    this.setState({ phone: sanitizedPhone });
    store.dispatch(createUser(this.state.userName, this.state.password, this.state.phone))
    .then(res => {
      if (res.err) {
        switch (res.err.status) {
          case 403: {
            this.displayAlert('Username taken');
            break;
          }
          default:
            this.displayAlert('Unknown Server Error', 'Try again later');
            break;
        }
      } else {
        // Set JWT to state
        this.navigateToLoggedInApp();
      }
    })
    .catch((err) => {
      console.warn(err);
    });
  }
  updateFormProp(field, val) {
    const obj = {};
    obj[field] = val;
    this.setState(obj);
  }
  render() {
    return (
      <BackgroundImage source={require('../static/bgLibrary/orangewhite.png')}>
        <ScrollView scrollEnabled={false} >
          <StatusBar barStyle="light-content" />
          <View style={styles.center}>
            <Image source={nameText} style={styles.loginTextLogo} />
            <View style={styles.underlined}>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={16}
                placeholder={'Phone Number (optional)'}
                value={this.state.phone}
                style={styles.userInput}
                keyboardType={'number-pad'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.refs.userName.focus()}
                onChangeText={(text) => this.updateFormProp('phone', text)}
              />
            </View>
            <View style={styles.underlined}>
              <TextInput
                ref={'userName'}
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={16}
                placeholder={'User Name (required)'}
                value={this.state.userName}
                style={styles.userInput}
                returnKeyType={'next'}
                onSubmitEditing={() => this.refs.password.focus()}
                onChangeText={(text) => this.updateFormProp('userName', text)}
              />
            </View>
            <View style={styles.underlined}>
              <TextInput
                ref={'password'}
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={16}
                placeholder={'Password (required)'}
                value={this.state.password}
                style={styles.userInput}
                returnKeyType={'go'}
                onChangeText={(text) => this.updateFormProp('password', text)}
                onSubmitEditing={this.loginToApp}
                secureTextEntry
              />
            </View>
            <View style={styles.topBuffer} />
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <Button text={'Login'} onClick={this.loginToApp} />
              <View style={{ width: 40 }} />
              <Button text={'Signup'} onClick={this.signupUser} />
            </View>
            <Image source={logo} style={{ marginTop: 40, height: 150, width: 150 }} />
          </View>
        </ScrollView>
      </BackgroundImage>
    );
  }
};

module.exports = Login;
