import styled from 'styled-components'

export const Button = styled.button`
  opacity: ${prop => prop.disabled ? 0.7 : 1};
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  margin: ${ props => props.margin || '0'};
  padding: 0 8px;
  border: none;
  border-radius: 10px; 
  background: ${props => props.background || '#888d64'};
  color: #fff;
  font-family: 'Playfair Display';
  font-size: ${props => props.size || '1em'}
`