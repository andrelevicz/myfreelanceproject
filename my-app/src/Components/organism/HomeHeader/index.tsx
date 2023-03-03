import React, {FC} from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProfileImg from '../../../images/Assunto.png'

export default function HomeHeader(props: any) {
  return (
    <div className="w-100 container">
      <div className="d-flex align-items-center containerIn">
        <div className="col-3 text-center textInfos">
          <h2 className='tittle'>Andre Motelevicz</h2>
          <h2 className='tittleName'>Desenvolvedor FullStack / FullStack Developer</h2>
          <h4 className='tittleDescription'>Tenho 20 anos, sou desenvolvedor e trabalho como tecnologia ha dois anos</h4>
        </div>
        <div className="row">
            <div className="col-md-6 my-3 imgContainer">
              <img src={MyProfileImg} className="imgProfile" alt="Minha Imagem PNG"></img>
             </div>
          </div>
        </div>
    </div>
  );
};
