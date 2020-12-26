import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const create = (component: any) => styled(component)`
  border: 1px solid #000;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const Link = create(RouterLink);

const Button = create('a');

export default Button;
