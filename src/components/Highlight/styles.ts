import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
margin-top: 8px;
`;
export const Title = styled.Text`
    text-align: center;
    font-size: ${({ theme })=> theme.FONT_SIZE.XL}px;
    font-weight: ${({ theme })=> theme.FONT_FAMILY.BOLD};
    color: ${({ theme })=> theme.COLORS.GRAY_100};
`;

export const SubTitle = styled.Text`
    text-align: center;
    color: ${({ theme })=> theme.COLORS.GRAY_100};
    font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
`;