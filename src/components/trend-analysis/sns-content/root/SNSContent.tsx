import { css, styled } from 'styled-components';

import InstagramContent from '../instagram/InstagramContent';
import { useState } from 'react';
import YoutubeContent from '../youtube/YoutubeContent';

interface Props {
  data: any;
  originalSearchKeyword: string;
}

const SNSContent = ({ data, originalSearchKeyword }: Props) => {
  const [activeMenu, setActiveMenu] = useState<'INSTAGRAM' | 'YOUTUBE'>(
    'INSTAGRAM',
  );

  return (
    <div>
      <TopMenuWrapper>
        <TopMenu>
          <MenuItem
            $active={activeMenu === 'INSTAGRAM'}
            onClick={() => setActiveMenu('INSTAGRAM')}
          >
            인스타그램
          </MenuItem>
          <MenuItem
            $active={activeMenu === 'YOUTUBE'}
            onClick={() => setActiveMenu('YOUTUBE')}
          >
            유튜브
          </MenuItem>
        </TopMenu>
      </TopMenuWrapper>
      {activeMenu === 'INSTAGRAM' ? (
        <InstagramContent
          data={data}
          originalSearchKeyword={originalSearchKeyword}
        />
      ) : (
        activeMenu === 'YOUTUBE' && (
          <YoutubeContent
            data={data}
            originalSearchKeyword={originalSearchKeyword}
          />
        )
      )}
    </div>
  );
};

export default SNSContent;

const TopMenuWrapper = styled.div`
  text-align: center;
`;

const TopMenu = styled.div`
  display: inline-flex;
  width: 20rem;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
`;

interface MenuItemProps {
  $active: boolean;
}

const MenuItem = styled.div<MenuItemProps>`
  flex: 1;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? css`
          background-color: #d33b4d;
        `
      : css`
          background-color: #ffffff;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          color: #707887;
        `}
`;
