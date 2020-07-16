import React from 'react';

import Logo from '../../assets/MarvelLogo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo Marvel" width={100} />
      <div>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
