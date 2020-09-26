import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

export const ProfileTitle = styled.text`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  font-size: 40px;
  font-weight: bold;
  color: #A54657;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 600px;
  width: 400px;
  border: 2px solid;
  border-color: #582630;
  border-radius: 20px;
  background: #d3d3d3;
`;

export const UserAvatar = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 100%;
  margin-bottom: 30px;
`;

export const UserName = styled.text`
  font-size: 20px;
  color: #F7EE7F;
  margin-bottom: 10px;
`;

export const UserEmail = styled.text`
  font-size: 20px;
  color: #F1A66A;
  margin-bottom: 40px;
`;