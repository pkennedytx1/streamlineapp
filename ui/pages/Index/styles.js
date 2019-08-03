import styled from 'styled-components';
import { lighten, darken } from 'polished';

const textColor = '#4285F4';

const Index = styled.div`
  text-align: center;
  color: black;
  height: auto;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 78px;
  }

  p {
    font-size: 29px;
    color: ${lighten(0.25, textColor)};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;

    .btn:first-child {
      margin-right: 10px;
    }

    .btn {
      margin: 20px;
      border-color: ${lighten(0.25, textColor)};
      font-weight: bold;
    }
  }

  footer {
    margin: 20px -20px -20px;
    border-top: 1px solid ${darken(0.1, textColor)};
    padding: 20px;

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${lighten(0.35, textColor)};
      margin: 0;
    }

    p a {
      color: ${lighten(0.35, textColor)};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;

    footer {
      margin: 30px -30px -30px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 40px;

    footer {
      margin: 40px -40px -40px;
    }
  }
`;

export default {
  Index,
};
