import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';
    import React from 'react';
    import MaskInput from 'react-native-mask-input';

    //pegar dimensão da tela
    const {width, height } = Dimensions.get('screen')

    const user = {
        username: "user",
        pass: "123456"
    }
    export default function LoginForm({navigation}) {

        const [username, setUsername] = React.useState('user');
        const [pass, setPass] = React.useState('123456');

        const validaUsuario = () => {
            if (pass ===user.pass && username === user.username {
                navigation.navigate('telaIMC', {name: 'telaIMC' });
            }
        }

            return (
                <View style={styles.container}>
                    <Text>Formulario de cadastro</Text>
                    <View style={styles.form}>
                        {/*USERNAME*/}
                        <MaskInput
                        style={styles.textInput}
                        onChageText={(masked, unmasked) =>  setUsername(masked)}
                        valuer={username}
                        placeholder="Digite seu usuário"
                        />
                        {/*PASSWORD*/}
                        <MaskInput
                        mask={() => [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setPass(masked)}
                        value={pass}
                        placeholder="Digite sua senha"
                        keyboardType="numeric"
                        />
                        <TouchableOpacity onPress = {validaUsuario}>
                            <Text>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            )
        }
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15
            },
            form: {
                width: width ,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            },
            textInput: {
                padding: 5,
                width: 200,
                height: 40,
                borderWidth: 1,
                borderColor: '#006eff',
                borderWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,    
                
            },
        });
    


