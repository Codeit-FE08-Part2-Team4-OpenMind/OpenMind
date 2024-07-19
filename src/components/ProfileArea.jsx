import styled from 'styled-components';

const ProfileImg = styled.img`
  width: 60px;
  border-radius: 9999px;
`;

const UserNameWrapper = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`;

function ProfileArea() {
  return (
    <>
      <ProfileImg />
      <UserNameWrapper>이름</UserNameWrapper>
    </>
  );
}

export default ProfileArea;
