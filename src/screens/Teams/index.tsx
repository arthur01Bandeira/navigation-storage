import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';

import { Container, HeaderContainer, Content } from './styles';

export function Teams() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title='Equipes'
          subtitle='Preparem suas equipes'
        />
      </HeaderContainer>

      <Content>
        <TeamCard title='Equipe 1' />
      </Content>
    </Container>
  );
}