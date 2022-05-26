import styled from "styled-components/macro";

export const StyledTitle = styled.h4`
  &::after {
    content: ${({ titleRule }) => (titleRule ? "''" : "none")};
    display: block;
    margin-block: calc(0.95rem - 1px) 0.55rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.foreground};
    opacity: var(--card-content-opacity);
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-property: opacity;
  }
`;

export const StyledSection = styled.section`
  opacity: var(--card-content-opacity);
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-property: opacity;
`;
