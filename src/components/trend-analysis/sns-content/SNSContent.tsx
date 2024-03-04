import { styled } from 'styled-components';

import InstagramContent from './instagram/InstagramContent';

const SNSContent = () => {
  return (
    <SNSContentBlock>
      <TopMenuWrapper>
        <TopMenu>
          <LeftMenuItem>인스타그램</LeftMenuItem>
          <RightMenuItem>유튜브</RightMenuItem>
        </TopMenu>
      </TopMenuWrapper>
      <InstagramContent />
    </SNSContentBlock>
  );
};

export default SNSContent;

const SNSContentBlock = styled.div`
  margin-bottom: 10rem;
`;

const TopMenuWrapper = styled.div`
  text-align: center;
`;

const TopMenu = styled.div`
  display: inline-flex;
  width: 20rem;
  align-items: center;
  justify-content: flex-end;
`;

const LeftMenuItem = styled.div`
  flex: 1;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  background-color: #d33b4d;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
`;

const RightMenuItem = styled.div`
  flex: 1;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #707887;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 140%;
`;
