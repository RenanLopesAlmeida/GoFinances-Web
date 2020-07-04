import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface RouteParams {
  route: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  
    const params = useLocation();
    
    return (
      <Container size={size}>
        <header>
          <img src={Logo} alt="GoFinances" />
          <nav>
            <Link to="/" className={params.pathname === '/' ? 'active' : ''}>Listagem</Link>
            <Link to="/import" className={params.pathname === '/import' ? 'active' : ''}>Importar</Link>
          </nav>
        </header>
      </Container>
    );
}

export default Header;
