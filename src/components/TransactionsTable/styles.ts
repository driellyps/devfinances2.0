import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5;
    }
    
    td {
      background: var(--shape);
      border: 0;
      padding: 1rem 2rem;
      color: var(--text-body);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title);
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.income {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

  }
`