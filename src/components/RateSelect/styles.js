import styled from 'styled-components';
import { Rate } from 'antd';

export const SelectWraper = styled(Rate)`
width: 379px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 64px;
color: #0D8384;
line-height: 41px;

.ant-rate-star-full svg{
    color: #0D8384;
    &:hover{
        color: #0D8384;
    }
}
svg{
    color: #ccc;
}
`
export const HIGHLIGHT = styled.span`
width: 379px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 48px;
color: #000000;
`