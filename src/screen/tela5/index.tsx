import * as React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Form, Formik,Field} from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Esta pergunta é obrigatória'),
})

export interface tela5Props {
}

export function tela5 (props: tela5Props) {
     type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela5'>

    const nav= useNavigation<navPros>();
    return (
      <View style={styles.container}>
           
      
         <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ name: '', }}
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
             
            
             <View  style={styles.loginContainer}>
         <Text>2.Avalie os conteúdos abordados nessa disciplina:
         </Text>
         </View>
        

         <View  style={styles.loginContainer}>
            <Text>
              Os conceitos apresentados foram suficientes para a realização 
              das atividades propostas colaborativamente.     <Text style={styles.errorText}>*</Text>
            </Text>
          <Form>      
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="One" />
              <Field type="checkbox" name="checked" value="Two" />
              <Field type="checkbox" name="checked" value="trhee" />
              <Field type="checkbox" name="checked" value="four" />
              <Field type="checkbox" name="checked" value="five" />
          </Form>  
          </View>

          <View  style={styles.loginContainer}>
            <Text>Foram pertinentes e atualizados.Por meio deles pude ter 
              uma boa visão sobre os assuntos ligados á disciplina.    <Text style={styles.errorText}>*</Text>
            </Text>
            <Form>         
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="1" />
              <Field type="checkbox" name="checked" value="2" />
              <Field type="checkbox" name="checked" value="3" />
              <Field type="checkbox" name="checked" value="4" />
              <Field type="checkbox" name="checked" value="5" />
          </Form> 
            </View>
             
          <View  style={styles.loginContainer}>
            <Text>A linguagem utilizada foi acessível e por meio do tom
              empregado estabeleci uma empatia com os conteúdos.      <Text style={styles.errorText}>*</Text>
            </Text>
            <Form>         
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="3-1" />
              <Field type="checkbox" name="checked" value="3-2" />
              <Field type="checkbox" name="checked" value="3-3" />
              <Field type="checkbox" name="checked" value="3-4" />
              <Field type="checkbox" name="checked" value="3-5" />
          </Form> 
           </View>
          <View  style={styles.loginContainer}>
            <Text>Os hiperlinks foram pertinentes, possibilitando-me 
              novas referências sobre o assunto.     <Text style={styles.errorText}>*</Text>
            </Text>
            <Form>         
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="4-1" />
              <Field type="checkbox" name="checked" value="4-2" />
              <Field type="checkbox" name="checked" value="4-3" />
              <Field type="checkbox" name="checked" value="4-4" />
              <Field type="checkbox" name="checked" value="4-5" />
          </Form>   
          </View>
          <View  style={styles.loginContainer}>
            <Text>O grau de profundidade e abrangência dos conteúdos esteve 
              de acordo com minha expectativa.      <Text style={styles.errorText}>*</Text>
            </Text>
            <Form>         
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="5-1" />
              <Field type="checkbox" name="checked" value="5-2" />
              <Field type="checkbox" name="checked" value="5-3" />
              <Field type="checkbox" name="checked" value="5-4" />
              <Field type="checkbox" name="checked" value="5-5" />
          </Form> 
           </View>
          <View  style={styles.loginContainer}>
            <Text>As referências complementares permitiram aprofundamento
               dos conceitos que mais me interessaram.    <Text style={styles.errorText}>*</Text>
            </Text>
            <Form>         
              <label style={{fontWeight:'bold',paddingLeft:5}}>  1  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>   2   </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  3  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  4  </label>
              <label style={{fontWeight:'bold',paddingLeft:8}}>  5  </label> <br />
              <Field type="checkbox" name="checked" value="6-1" />
              <Field type="checkbox" name="checked" value="6-2" />
              <Field type="checkbox" name="checked" value="6-3" />
              <Field type="checkbox" name="checked" value="6-4" />
              <Field type="checkbox" name="checked" value="6-5" />
          </Form>
          </View>

            
          <Button
            title="Enviar"
            color="blue"
            onPress={() => nav.navigate('tela6')}
          />


          

         </>
          )}
        </Formik>
       
      </View>
    );
}



const styles = StyleSheet.create({
  input: {
    margin: 2,
    padding: 2,
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
