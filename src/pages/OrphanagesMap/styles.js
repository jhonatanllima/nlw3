import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.section`
  .page-map{
    position: relative;
    
    display:flex;
    width: 100vw;
    height: 100vh;

    aside{
      display: flex;
      width: 440px;
      padding: 80px;
      flex-direction: column;
      justify-content: space-between;

      background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

      h2{
        margin-top: 64px;

        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
      }

      p{
        margin-top: 24px;

        line-height: 28px;
      }

      footer{
        display: flex;
        flex-direction: column;

        line-height: 24px;

        strong{
          text-align: end;
          font-weight: 800;
        }

        span{
          text-align: end;
        }
      }
    }

    .leaflet-container{
      z-index: 1;
    }

    .plus{
      z-index: 2;
      right: 40px;
      bottom: 40px;      
      position: absolute;

      display: flex;
      width: 64px;
      height: 64px;
      align-items: center;
      border-radius: 20px;
      justify-content: center;
      color:${colors.white};
      background-color: ${colors.buttonBlue};
      transition: background-color 0.2s;
      :hover{
        transition: background-color 0.2s;
        background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
      }
    }
  }
`;
