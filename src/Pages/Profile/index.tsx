import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButtom from '../../components/LogoutButton';

import { Container, ProfileTitle, UserContainer, UserAvatar, UserName, UserEmail } from './styles';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <ProfileTitle>
        Você acabou de fazer login com Auth0
      </ProfileTitle>
      {isAuthenticated &&(
          <UserContainer>
            <UserAvatar src={user.picture} alt=""/>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <LogoutButtom/>
          </UserContainer>
        )
      }
    </Container>
  );
}

export default Profile;