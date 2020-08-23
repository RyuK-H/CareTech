import React from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

const MainContainer = styled.div`
  display: flex;
  margin-top: 81.15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubTitleDiv = styled.div`
  margin-top: 180px;
`;

const DescDiv = styled.div`
  margin-top: 28px;
  width: 348px;
  height: 84px;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
`;

const LogoTitle = styled.header`
  text-align: center;
  font-weight: bold;
  color: #7f8bfa;
`;

const Text = styled.p`
  line-height: 19px;
  font-size: 16px;
  color: #c4c4c4;
`;

const InputDiv = styled.div`
  margin-top: 62px;
`;

const InputItem = styled.div`
  display: flex;
  align-content: center;
  width: 327px;
  height: 46px;
  border-radius: 8px;
  background-color: #fafafb;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const OptionTitle = styled.p`
  width: 28px;
  margin-left: 20px;
  padding-top: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: #a2a2a2;
  font-weight: bold;
`;

const CountryDropdown = styled(Dropdown)`
  .dropdown.icon {
    color: #a2a2a2 !important;
    margin: 0px !important;
    padding: 0px !important;
    padding-top: 5px !important;
  }

  margin-left: 50px;
  width: 229px !important;
  font-size: 14px;
  font-weight: bold;
  color: #313131 !important;
  border: 0px !important;
  padding: 0 !important;
  padding-top: 15px !important;
  box-shadow: none !important;
  background-color: inherit !important;
`;

const options = [
  { key: 1, text: "서울특별시", value: 1 },
  { key: 2, text: "부산광역시", value: 2 },
  { key: 3, text: "대구광역시", value: 3 },
  { key: 4, text: "인천광역시", value: 4 },
  { key: 5, text: "광주광역시", value: 5 },
  { key: 6, text: "대전광역시", value: 6 },
  { key: 7, text: "울산광역시", value: 7 },
  { key: 8, text: "세종특별시", value: 8 },
  { key: 9, text: "경기도", value: 9 },
  { key: 10, text: "강원도", value: 10 },
  { key: 11, text: "충청북도", value: 11 },
  { key: 12, text: "충청남도", value: 12 },
  { key: 13, text: "전라북도", value: 13 },
  { key: 14, text: "전라남도", value: 14 },
  { key: 15, text: "경상북도", value: 15 },
  { key: 16, text: "경상남도", value: 16 },
  { key: 17, text: "제주특별시", value: 17 },
];

const SignUpPage = () => {
  return (
    <MainContainer>
      <LogoTitle>Care Tech</LogoTitle>
      <SubTitleDiv>
        <Text>내가 받을 수 있는 복지 혜택 찾기 힘드시죠?</Text>
      </SubTitleDiv>
      <DescDiv>나에게 딱맞는 복지 정책을 3초만에 추천 받아보세요.</DescDiv>
      <InputDiv>
        <InputItem>
          <OptionTitle>지역</OptionTitle>
          <CountryDropdown
            floating
            selection
            options={options}
            placeholder="지역을 선택해주세요."
          />
        </InputItem>
        <InputItem>
          <OptionTitle>나이</OptionTitle>
        </InputItem>
        <InputItem>
          <OptionTitle>성별</OptionTitle>
        </InputItem>
      </InputDiv>
    </MainContainer>
  );
};

export default SignUpPage;
