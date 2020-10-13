import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';

import { Container } from './styles';

import logoImg from '../../themes/images/logo.svg';

function Landing() {
  return (
    <Container>
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo"/>

        <main className="main">
            <h1>Leve felicidade para  o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Sumaré</strong>
          <span>São Paulo</span>
        </div>

        <Link to='/app'>
          <FiArrowRight size={20} />
        </Link>
      </div>
    </Container>
  );
}

export default Landing;
