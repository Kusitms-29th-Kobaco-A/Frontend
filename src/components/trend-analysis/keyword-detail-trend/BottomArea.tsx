import styled from 'styled-components';

const BottomArea = () => {
  return (
    <WhiteBoxGroupBottom>
      <WhiteRoundedBox>
        <IconWrapper>
          <i>
            <img src="/icons/search-icon.svg" alt="검색 아이콘" />
          </i>
          <span>인기 검색어 TOP 50</span>
        </IconWrapper>
        <GrayRoundedBoxGroup>
          <GrayRoundedBox>
            <IconWrapperGroup>
              <IconWrapper>
                <span>연관어</span>
                <i>
                  <img src="/icons/question-circle.svg" alt="물음표 아이콘" />
                </i>
              </IconWrapper>
              <IconWrapper>
                <i>
                  <img src="/icons/excel.svg" alt="물음표 아이콘" />
                </i>
                <span>데이터 내보내기</span>
              </IconWrapper>
            </IconWrapperGroup>
            <ChartPlaceholder>
              <img
                src="/images/graph-placeholder/mindmap-placeholder.svg"
                alt="마인드맵 임시"
              />
            </ChartPlaceholder>
          </GrayRoundedBox>
          <GrayRoundedBox>
            <GrayRoundedBoxTop>
              <span>케이크</span>
              <div>
                <i>
                  <img src="/icons/list.svg" alt="리스트 아이콘" />
                </i>
                <i>
                  <img src="/icons/grid.svg" alt="그리드 아이콘" />
                </i>
              </div>
            </GrayRoundedBoxTop>
            <GrayRoundedBottom>
              <GridList>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (_, index) => (
                    <GridListItem key={index}>
                      <ListImage>
                        <img src="/images/posts/cake.jpeg" alt="" />
                      </ListImage>
                      <ListContent>
                        <h3>세상에서 제일 맛있는 케이크 가...</h3>
                        <p>
                          케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케
                        </p>
                      </ListContent>
                    </GridListItem>
                  ),
                )}
              </GridList>
            </GrayRoundedBottom>
          </GrayRoundedBox>
        </GrayRoundedBoxGroup>
      </WhiteRoundedBox>
    </WhiteBoxGroupBottom>
  );
};

export default BottomArea;

const WhiteBoxGroupBottom = styled.div`
  margin-top: 0.75rem;
`;

const WhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 1rem 1.75rem;
  border-radius: 16px;
`;

const IconWrapperGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  span {
    color: #a0a0a0;
    font-weight: 700;
  }
`;

const ChartPlaceholder = styled.div`
  padding: 3.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GrayRoundedBoxGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const GrayRoundedBox = styled.div`
  background-color: #f4f6f6;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
  flex: 1;
`;

const GrayRoundedBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GrayRoundedBottom = styled.div``;

const GridList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 22.5rem;
  overflow-y: scroll;
`;

const GridListItem = styled.li`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #ffffff;
  display: flex;
  gap: 0.75rem;
`;

const ListImage = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 0.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ListContent = styled.div`
  flex: 1;

  h3 {
    margin-top: 0.25rem;
    line-height: 140%;
  }

  p {
    color: #bebebe;
    margin-top: 0.25rem;
    line-height: 140%;
    font-size: 0.875rem;
  }
`;
