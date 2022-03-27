import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead > tr > th {
      color: ${(props) => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody > tr > td {
      padding: 1rem 2rem;
      border: 0;
      background-color: ${props => props.theme.colors.shape};
      color: ${props => props.theme.colors.textBody};
      border-radius: 0.25rem;

      &:first-child {
        color: ${props => props.theme.colors.textTitle};
      }

      &.deposit {
        color: ${props => props.theme.colors.green};
      }

      &.withdraw {
        color: ${props => props.theme.colors.red};
      }
    }
  }
`;