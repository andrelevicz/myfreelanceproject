import React, {FC, useRef, useState} from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
    name: string & any;
    idade: string;
    email: string;
    observ: string;
  }

export default function CadastroUsuaruio() {

    const [nome , setNome] = useState('');
    const [idade , setIdade] = useState('');
    const [email , setEmail] = useState('');
    const [observ , setObserv] = useState('');
    const [arrayObject, setArrayObject] = useState<User[]>([]);


    function handleChangeName(event : any) {
        setNome(event.target.value)
        return true
      }


    function handleChangeIdade(event : any) {
        setIdade(event.target.value)
        return true
      }


    function handleChangeEmail(event : any) {
        setEmail(event.target.value)
        return true
      }


    function handleChangeObserv(event : any) {
        setObserv(event.target.value)
        return true
      }
    
    function  enviaDados() {
        
        let formValue = {
            "name" : nome,
            "idade" : idade,
            "email" : email,
            "observ" : observ,
        }
        console.log(formValue);

        let newArray = [...arrayObject, formValue]
        setArrayObject(newArray);
        return true
      }


    function resetaDados() {
        setNome('');
        setEmail('');
        setIdade('');
        setObserv('');
    }

    function showDados() {
        let listaNomes: string[] = [];
        let arrayUsers = arrayObject;
        for (let i = 0; i < arrayUsers.length; i++) {
          listaNomes.push(arrayUsers[i].name);
        }

        alert(listaNomes)
        console.log(arrayUsers)
        resetaDados()
        setArrayObject([])
        return true
    }
  
  return (
    <div className='container'>
        <h1>CADASTRADO DE USUARIO</h1>
            <label>
                name:
                <input type="text" value={nome} onChange={handleChangeName}></input>
            </label>
            <label>
                idade:
                <input type="text" value={idade} onChange={handleChangeIdade}></input>
            </label>
            <label>
                email:
                <input type="text" value={email} onChange={handleChangeEmail}></input>
            </label>
            <label>
                observ:
                <input type="text" value={observ} onChange={handleChangeObserv}></input>
            </label>
            <input type="submit" value="reset" onClick={() => resetaDados()} />
            <input type="submit" value="Submit" onClick={() => enviaDados()}/>
            <input type="submit" value="Mostrar" onClick={() => showDados()} />
    </div>
    
  );
};
