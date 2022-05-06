import styled from 'styled-components'

export const Button = styled.button`
  padding: 3px;
  background-color: orange;
  color: white;
`
export const Title = styled.h1`
  color: green;
  display: ${props => (props.display ? 'block' : 'none')};
`
