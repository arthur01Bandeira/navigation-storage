import { Image, StyleSheet, Text, View } from "react-native";

import logoImg from "@assets/Logo.png";
import {Container} from "./styles";

export function Teams() {
    return (
        <Container>
            <Text>Teams</Text>
            <Image source={logoImg} />
        </Container>
    );
}

