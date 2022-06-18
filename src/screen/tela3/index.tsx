import * as React from 'react';
import {  SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Form, Formik } from 'formik';
import * as yup from 'yup';


const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name2: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name3: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name4: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name5: yup
      .string()
      .required('Esta pergunta é obrigatória'),
  })

export interface tela3Props {
}

export function tela3 (props: tela3Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela3'>
    const nav= useNavigation<navPros>();

   

    
    return (
        <View style={styles.container}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ name: '',name2: '',name3: '', name4: '',name5: '' }}
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

          <View style={styles.loginContainer}>
           <Text>Indique a cidade e o polo
             presencial em que você estuda.  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                name="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                
                />
               {(errors.name && touched.name) &&
                <Text style={styles.errorText}>{errors.name}</Text>
              }
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Qual seu curso?  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                name="name2"
                onChangeText={handleChange('name2')}
                onBlur={handleBlur('name2')}
                value={values.name2}
                
                />
               {(errors.name2 && touched.name2) &&
                <Text style={styles.errorText}>{errors.name2}</Text>
              }
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Qual sua turma?  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                name="name3"
                onChangeText={handleChange('name3')}
                onBlur={handleBlur('name3')}
                value={values.name3}
                
                />
               {(errors.name3 && touched.name3) &&
                <Text style={styles.errorText}>{errors.name3}</Text>
              }
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Em qual ano/mês você iniciou o curso?<Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                name="name4"
                onChangeText={handleChange('name4')}
                onBlur={handleBlur('name4')}
                value={values.name4}
                
                />
               {(errors.name4 && touched.name4) &&
                <Text style={styles.errorText}>{errors.name4}</Text>
              }  
           </View>
           <View style={styles.loginContainer}>
           <Text>Selecione a disciplina
            para a qual você responderá o questionário:  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                name="name5"
                onChangeText={handleChange('name5')}
                onBlur={handleBlur('name5')}
                value={values.name5}
                
                />
               {(errors.name5 && touched.name5) &&
                <Text style={styles.errorText}>{errors.name5}</Text>
              }
            
           </View>

           <Button
            title="Avançar"
            color="blue"
            onPress={() => nav.navigate('tela4')}
          />


           </>
          )}
           </Formik>
      
        </View>
    );

}




const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'white',
    },
    loginContainer: {
      width: '95%',
      backgroundColor: 'white',
      padding: 10,
      margin:10,
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
        fontSize: 15,
        color: 'red',
      },
      baseText: {
        color:'#008000'
      },
  })
  





  




   





