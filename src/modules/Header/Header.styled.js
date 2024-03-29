import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(36, 39, 40);
  background-image: radial-gradient(
    circle at 50% 50%,
    #7c7c48 0,
    #717943 12.5%,
    #62723b 25%,
    #4d672f 37.5%,
    #32591f 50%,
    #104b11 62.5%,
    #004009 75%,
    #003908 87.5%,
    #00350c 100%
  );

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .warraper-nav {
    display: flex;
    justify-content: space-between;

    padding: 0 15px;

    width: 100%;
    max-width: 1250px;
  }
`;
