import React, { FC } from 'react';

import { Styled{{pascalCase}} } from './styles'

export interface {{pascalCase}}Props {
  className?: string;
  style?: React.CSSProperties;
};

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
  const {...restProps} = props
  
  return <Styled{{pascalCase}} {...restProps}></Styled{{pascalCase}}>;
};
