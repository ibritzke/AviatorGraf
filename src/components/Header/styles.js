import styled from "styled-components";

export const Container = styled.header`
  background: var(--greyBlack);
`;
export const Logo = styled.div`
  
`;
export const Title = styled.h1`
 color: var(--background);
 font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 font-weight: 300;
`;
export const Subtitle = styled.p`
 color: var(--red);
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight: 500;
text-align: center;
font-size: 12px;
letter-spacing: 0.2rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  button {
    color: #fff;
    background: var(--black);
    border: 0;
    padding: 10px;
    border-radius: 50%;
    &:hover {
    }
  }
`;
