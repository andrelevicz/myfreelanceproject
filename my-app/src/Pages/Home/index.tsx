import React, {FC} from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTemplate from '../../Components/templates/HomeTemp';
import CadastroUsuaruio from '../../Components/templates/CadastroUsuario';



export function Home() {
  return (
    <div className='container'>
      {/* <HomeTemplate /> */}
      <CadastroUsuaruio />
    </div>
  );
};

