import { MaterialIcons } from "@expo/vector-icons";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/Logo.png";

type Props = {
    showBackButton?: boolean;
}


export function Header({showBackButton = false}: Props){
    return(
        <Container>
            {
            showBackButton &&
            <BackButton>
                <BackIcon name="arrow-back-ios"/>
             </BackButton>
            }

            <Logo source={logoImg} />  
        </Container>
    );
}

