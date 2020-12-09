import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { accountLogin, authenticateUser } from '../api';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        if (this.state.username && this.state.password) {
            this.setState({ loading: true });
            accountLogin({
                userName: this.state.username,
                password: this.state.password
            })
                .then(data => {
                    if (!data.error) {
                        AsyncStorage.setItem('authToken', data.token).then(() => {
                            this.props.navigation.dispatch(StackActions.replace('Orders'));
                        });
                    } else {
                        Alert.alert(
                            'Đăng nhập không thành công',
                            'Tên đăng nhập hoặc mật khẩu không chính xác.',
                            [{ text: 'OK' }],
                            { cancelable: false }
                        );
                    }
                })
                .catch(error => console.error(error))
                .finally(() => this.setState({ loading: false }));
        } else {
            Alert.alert(
                'Thông tin đăng nhập không hợp lệ',
                'Vui lòng nhập tên đăng nhập và mật khẩu.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        AsyncStorage.getItem('authToken')
            .then(value => value ? authenticateUser(value) : null)
            .then(data => {
                if (data) {
                    if (!data.error && data.message === 'success') {
                        this.props.navigation.dispatch(StackActions.replace('Orders'));
                    } else {
                        AsyncStorage.removeItem('authToken').then(() => {
                            Alert.alert(
                                'Xác thực người dùng không thành công',
                                'Phiên làm việc đã hết hạn, vui lòng đăng nhập lại.',
                                [{ text: 'OK' }],
                                { cancelable: false }
                            );
                        });
                    }
                }
            })
            .catch(error => console.error(error))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    {this.state.loading
                        ? <View style={styles.activityIndicatorContainer}>
                            <ActivityIndicator color="#003f5c" size="large" />
                        </View>
                        : null
                    }
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.logo}>Store Management</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            autoCapitalize="none"
                            placeholder="Tên đăng nhập..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ username: text })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry={true}
                            placeholder="Mật khẩu..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.onSubmit}>
                        <Text style={styles.loginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c'
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityIndicatorContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#fb5b5a',
        marginBottom: 40
    },
    inputView: {
        width: '75%',
        justifyContent: 'center',
        backgroundColor: '#465881',
        height: 50,
        borderRadius: 35,
        padding: 20,
        marginBottom: 20
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    loginBtn: {
        width: '50%',
        backgroundColor: '#fb5b5a',
        borderRadius: 35,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default LoginScreen;
