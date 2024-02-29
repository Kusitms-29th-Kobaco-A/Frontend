/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import { ChangeEvent, useState } from "react";

// 랜딩페이지
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <TotalComponent>
      <Header />
      <UnderHeaderComponent>
        <TotalLoginBox>
          <TopLoginText>로그인</TopLoginText>
          <ContainerBox>
            <ContainerLeftBox>
              <InputBox
                onChange={handleChangeEmail}
                value={email}
                type="text"
                placeholder="이메일을 입력하세요"
              />
              <InputBox
                onChange={handleChangePassword}
                value={password}
                marginTop="4px"
                type="text"
                placeholder="비밀번호를 입력하세요"
              />
            </ContainerLeftBox>
            <LoginBtn>로그인</LoginBtn>
          </ContainerBox>
          <ForgetIdText>아이디를 잊으셨나요?</ForgetIdText>
          <ForgetPasswordText>비밀번호를 잊으셨나요?</ForgetPasswordText>
          <SignUpBtn>회원가입</SignUpBtn>
          <div>{email}</div>
          <div>{password}</div>
        </TotalLoginBox>
      </UnderHeaderComponent>
    </TotalComponent>
  );
};

export default Login;

const TotalComponent = styled.div`
  width: 100vw;
`;

const UnderHeaderComponent = styled.div`
  margin-top: 162px;
  display: flex;
  justify-content: center;
`;

const TotalLoginBox = styled.div`
  background: #fff;
  width: 500px;
  margin: 120px auto 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  height: 387px;
`;

const TopLoginText = styled.div`
  margin: 50px 0px 0px 50px;
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  color: #d33b4d;
  padding-bottom: 20px;
  border-bottom: 2px solid #d33b4d;
`;

const ContainerBox = styled.div`
  margin: 20px 0px 0px 50px;
  display: flex;
  justify-content: center;
  width: 380px;
  height: 80px;
`;

const ContainerLeftBox = styled.div`
  width: 300px;
  height: 100%;
`;

const InputBox = styled.input<{ marginTop?: string }>`
  width: 276px;
  height: 36px;
  padding-left: 10px;
  text-indent: 10px;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const LoginBtn = styled.button`
  width: 76.2px;
  height: 84px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background: #d33b4d;
  color: #fff;
  line-height: 80px;
  font-size: 15px;
  cursor: pointer;
`;

const ForgetIdText = styled.div`
  margin: 26px 0px 0px 50px;
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;

const ForgetPasswordText = styled(ForgetIdText)`
  margin: 3px 0px 0px 50px;
`;

const SignUpBtn = styled.button`
  display: block;
  width: 380px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background: #a4aebd;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 26px 50px;
  border: none;
  cursor: pointer;
`;
