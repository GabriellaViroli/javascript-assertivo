import styled, { css } from 'styled-components';

export const Logout = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${theme.spacing.onehalf};
    top: ${theme.spacing.onehalf};

    & > figure {
      width: ${theme.spacing.double};
      height: ${theme.spacing.double};
      border-radius: ${theme.radius.rounded};
      overflow: hidden;
    }

    & > *:not(:last-child) {
      margin-right: ${theme.spacing.default};
    }
  `}
`;

export const Greetings = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.post.color};
    margin-right: ${theme.spacing.default};
  `}
`;

export const CarouselWrapper = styled.div`
  ${({ theme, editing }) => css`
    transition: ${theme.transition.default};
    opacity: ${editing ? 0.1 : 1};
  `}
`;

const editor = {
  active: (theme) => css`
    top: 25%;

    @media (max-width: 800px) {
      top: 0;
    }
  `
}

export const Editor = styled.div`
  ${({ theme, active }) => css`
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    position: fixed;
    top: 105%;
    left: 0;
    right: 0;
    transition: ${theme.transition.default};
    letter-spacing: 0.8px;

    ${active && editor.active(theme)};

    @media (max-width: 800px) {
      width: 100vw;
      height: 100vh;
      overflow: auto;
    }

    & > div {
      min-width: 100%;
      min-height: 100%;
    }
  `}
`;

export const EditorTitle = styled.b`
  ${({ theme }) => css`
    color: ${theme.colors.terminal.blue.default};
  `};
`;

export const CloseButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacing.half};
    top: ${theme.spacing.half};
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    & > form {
      padding-top: ${theme.spacing.default};
      display: flex;
      flex-direction: column;
    }
  `}
`;