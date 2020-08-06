import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {

}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/20346702?s=460&u=712c65b429ba837ffae63c6be603f3953323f722&v=4"
          alt=""
        />
        <div>
          <strong>Robson M. Gomes</strong>
          <span>Engenharia de Software</span>
        </div>
      </header>
      <p>
        Entusiasta do uso da Tecnologia em Favor da Saúde Humana
        <br />
        <br />É incrível o horizonte de possibilidades que se abrem quando um
        ser humano cria algo que facilita a vida de outro.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 600,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
