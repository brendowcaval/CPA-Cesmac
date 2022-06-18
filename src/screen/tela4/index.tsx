import * as React from 'react';
import { View, Text,StyleSheet,Button,SafeAreaView } from 'react-native';
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

export interface tela4Props {
}

export function tela4 (props: tela4Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela4'>

    const nav= useNavigation<navPros>();
    return (
      <View style={styles.container}>
         <SafeAreaView>
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
         <Text>1.Avalie sua atuação pessoal durante a disciplina:
         </Text>
         </View>
        

         <View  style={styles.loginContainer}>
            <Text>
              Estive motivado durante o decorrer de todar
              disciplina.    <Text style={styles.errorText}> * </Text>
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
            <Text>Consegui me organizar para o estudo,conciliando os trabalhos
              com as atividades pessoais e profissionais.    <Text style={styles.errorText}> * </Text>
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
            <Text>Participei efetivamente das atividades individuais propostas(tarefas)
                     <Text style={styles.errorText}> * </Text>
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
            <Text>Contribui com meus conhecimentos,ideias e experiências para os 
              trabalhos desenvolvidos em grupo(fóruns).        <Text style={styles.errorText}> * </Text>
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
            <Text>As opiniões de colegas e do(a) professor(a) contribuíram
              para o meu processo de aprendizagem.      <Text style={styles.errorText}> * </Text>
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
            <Text>Sinto-me motivado(a) a aplicar os conhecimentos obtidos nesta 
              disciplina do curso.         <Text style={styles.errorText}> * </Text>
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

            
           
            <View style={styles.buttom}>
           <Button
            title="Avançar"
            color="blue"
            onPress={() => nav.navigate('tela5')}
          />
          </View>

         </>
          )}
        </Formik>
        </SafeAreaView>
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
        buttom: {
          padding: 150
        },
    })







  
