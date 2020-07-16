import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  width: 100%;
  max-width: 1100%;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
  max-width: 500px;

  margin: 80px auto 0;

  form {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      width: 100%;
      flex: 1;
      height: 52px;
      padding: 0 16px;
      border: 0;
      border: 2px solid #f8f8f8;
      border-left: 0;
      border-radius: 5px 0 0 5px;
    }

    button {
      width: 120px;
      background: #ed1d24;
      border: 0;
      height: 52px;
      color: #fff;
      font-weight: bold;
      font-size: 17px;
      border-radius: 0 5px 5px 0;

      &:hover {
        background: ${shade(0.2, '#ed1d24')};
      }
    }
  }
`;

export const CharacterInfo = styled.div`
  width: 100%;
  max-width: 960px;

  margin: 20px auto 0;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: box-shadow 0.2s;
    box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      /* transform: translateX(10px); */
      box-shadow: 0 1px 14px 0px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 15px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    & + a {
      margin-top: 16px;
    }
  }
`;
