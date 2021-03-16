import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/img/logo/logo.svg';

const Logo = ({ styleComponents }) => {
  return <LogoSvg className={styleComponents} />;
};

export default Logo;
