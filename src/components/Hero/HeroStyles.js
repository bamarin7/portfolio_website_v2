import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  z-index: 150;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 50vh;
  }
`;