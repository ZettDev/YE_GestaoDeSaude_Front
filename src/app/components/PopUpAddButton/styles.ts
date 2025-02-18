import { AddIcon, DeleteIcon } from "native-base";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
`;

export const LeftContainer = styled.View`
    flex: 1;
    align-items: flex-start;
`;

export const RightContainer = styled.View`
    flex: 1;
    align-items: flex-end;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Button = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    min-width: 168px;
    max-width: 168px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
`;

export const ButtonText = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;

export const AddIconStyled = styled(AddIcon)`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-right: 8px;
`;

export const DeleteIconStyled = styled(DeleteIcon).attrs({
    size: 1
})`
    color: whitesmoke;
    margin-left: 16px;
`;
