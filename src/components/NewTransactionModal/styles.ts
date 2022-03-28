import { darken, transparentize } from 'polished';
import styled from 'styled-components';

interface IRadioBoxProps {
  isActive?: boolean;
  activeColor: 'red' | 'green' | 'blue' | 'blueLight';
}

export const Container = styled.form`
  h2 {
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.textBody};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.green};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transform: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const RadioBox = styled.button<IRadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, props.theme.colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textTitle};
  }
`;
