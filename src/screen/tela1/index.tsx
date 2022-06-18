/**tsrnsl : para criar a base do projeto */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar,
              View,
               Text,
               Image,
              Button,
           TextInput,
            StyleSheet,
            SafeAreaView,
            Share} from 'react-native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Formik,Form,Field } from 'formik';
import * as yup from 'yup';


const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})




export interface tela1Props {
}
/**tag view é tipo uma div do html */
export function tela1 (props: tela1Props) {
    /**o set é para poder mudar o valor */
    let nome2:string="Comissão Própria de Avaliação";
    const [titleText] = React.useState("CPA CESMAC");
    const [valor1, setValor1]=React.useState(10);
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela1'>

    const nav= useNavigation<navPros>();
   
    

    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          
        <Text style={{fontWeight:'bold',fontSize:40,color:"blue"}}>
        {titleText} {"\n"}
        <Text style={{fontSize:20}}>{nome2}</Text>
        {"\n"}
        </Text>
          <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid, }) => (
              
            <>
              <Text style={{fontWeight:'bold'}}>Email</Text>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
                {(errors.email && touched.email) &&
                <Text style={styles.errorText}>{errors.email}</Text>
              }
              <Text style={{fontWeight:'bold'}}>Password</Text>
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
               {(errors.password && touched.password) &&
                <Text style={styles.errorText}>{errors.password}</Text>
              }
              
              <Button onPress={handleSubmit} title="Entrar" color="blue"
       disabled={!isValid} onPress={() => nav.navigate('tela2')}/>
              
              
               
              
               
               
            </>
          )}
        </Formik>
             
        </View>
      </SafeAreaView>
    </>
    );
}

/**css externo */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
  },
  textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    errorText: {
      fontSize: 10,
      color: 'red',
    },
    baseText: {
      color:'#008000'
    },
})