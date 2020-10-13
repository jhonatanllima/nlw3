import styled from 'styled-components';

import colors from '../../themes/colors';

import logoLanding from '../../themes/images/landing.svg';

export const Container = styled.section`
  display:flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;


  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  
  .content-wrapper{
    position: relative;

    display:flex;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    max-height: 680px;
    align-items:flex-start;
    flex-direction: column;
    justify-content: space-between;
    
  background: url('${logoLanding}') no-repeat 80% center;
  }

  main{
    margin-top: 10%;
    max-width: 350px;    
    h1{
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p{
      margin-top: 40px;

      font-size: 24px;
      line-height: 34px;
    }
  }

  .location{
      top: 0;
      right: 0;
      position: absolute;

      display:flex;
      text-align: end;
      flex-direction: column;

      font-size: 24px;
      line-height: 34px;

      strong{
        font-weight: 800;
      }
    }

    a{
      right: 0;
      bottom: 0;
      position: absolute;

      width: 80px;
      height: 80px;
      display:flex;
      align-items: center;
      border-radius: 30px;
      justify-content: center;

      font-size: 24px;
      line-height: 34px;
      color: ${colors.white};
      background-color: ${colors.yellow}; 
      transition: background-color 0.2s;

      :hover {
        color: ${colors.black};
        background-color: ${colors.babyBlue}; 
      }

    }
`;
