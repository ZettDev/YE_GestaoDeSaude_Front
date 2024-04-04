import { InputField } from "@components/InputField";
import styled from "styled-components/native";

export type sizeType = "LARGE" | "SMALL";

type InputProps = {
    sizeType: sizeType | undefined;
};

export const MedicineButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Txt = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const InputTxt = styled.Text`
    margin-top: 8px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const MedicineView = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    border-bottom-width: 1px;
    border-color: black;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom-width: 1px;
    border-color: black;
    padding: 8px 0;
`;

export const InputView = styled.View<InputProps>`
    width: ${({ sizeType }) => (sizeType === "LARGE" ? "75%" : "60%")};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled(InputField).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    cursorColor: "black"
}))`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    padding: 0 8px;
`;

// export const Input = styled.TextInput.attrs(({ theme }) => ({
//     placeholderTextColor: theme.COLORS.GRAY_400,
//     fontFamily: theme.FONT_FAMILY.REGULAR,
//     cursorColor: "black"
// }))<InputProps>`
//     width: ${({ sizeType }) => (sizeType === "LARGE" ? "75%" : "50%")};
//     font-size: ${({ theme }) => theme.FONT_SIZE.SM};
//     border: 1px solid black;
//     border-radius: 8px;
//     padding: 0 8px;
//     background-color: ${({ theme }) => theme.COLORS.WHITE};
// `;
