import styled from 'styled-components'

export const RadioContainer = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['gray-700']};
  text-transform: uppercase;

  flex-wrap: wrap;
  font-size: var(--text-xs);

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-300']};
    border-color: ${(props) => props.theme['purple-500']};
  }

  input {
    display: none;
  }
`