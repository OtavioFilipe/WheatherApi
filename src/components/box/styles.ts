import styled from 'styled-components';

export const Container = styled.div`
 background-color: #8ba5ce;
 border-radius: 8px;
 align-items: center;
 justify-content: center;
 display: flex;
 flex-direction: row;
 width: 40%;
 height: 300px;
 gap: 20px;
 overflow: hidden;
`
export const Label = styled.label`
 font-size: 13px;
 color: gray;
 display: flex;
 width: auto;
`
export const Information = styled.h3`
 font-size: 23px;
 color: white;
`
export const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
`