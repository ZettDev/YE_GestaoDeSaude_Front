import { Title } from "@components/Title/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

import { Button, ButtonText, Container, SubTitle, Txt } from "./styles";
import Logo1 from "../../../../assets/logo-verde.png";

export default function Home({ navigation }: any) {
    async function handleGoToLogin() {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            navigation.navigate("StackRoutes");
        } else {
            navigation.navigate("Login");
        }
    }
    return (
        <Container>
            <SubTitle>YE Gestão de Saúde</SubTitle>
            <Image source={Logo1} alt="Logo" />
            <Title color="white">Boas-Vindas!</Title>
            <Txt>
                Gerencie sua saúde com facilidade! Use nosso aplicativo para
                conferência de exames, receba resultados em tempo real e
                lembretes personalizados para seus medicamentos!
            </Txt>

            <Button onPress={handleGoToLogin}>
                <ButtonText>Login</ButtonText>
            </Button>

            <Button onPress={() => navigation.navigate("Register")}>
                <ButtonText>Cadastro</ButtonText>
            </Button>
        </Container>
    );
}
