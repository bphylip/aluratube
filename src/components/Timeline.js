import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  //width original em 100%
  width: 95%;
  //
  padding: 16px;
  overflow: hidden;
  //teste de estilo
  margin: auto;
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  border-radius: 0px 0px 10px 10px;
  //
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      //estilo thumb
      img {
        border-radius: 10px;
        box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.4);
      }
      //
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          padding-bottom: 9px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;