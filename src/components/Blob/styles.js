import styled from 'styled-components';


export const Img = styled.img`
width: 200px;
height:auto;
position:absolute;
${(props) => props.top ? 'top: 0; left:0;' : 'bottom:0; right:0;'}
`