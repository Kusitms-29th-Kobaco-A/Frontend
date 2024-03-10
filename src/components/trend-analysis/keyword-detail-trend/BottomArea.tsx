import { useState } from 'react';
import styled from 'styled-components';
import { FaList } from 'react-icons/fa6';
import { LuLayoutGrid } from 'react-icons/lu';
import clsx from 'clsx';

interface Props {
  originalSearchKeyword: string;
}

const BottomArea = ({ originalSearchKeyword }: Props) => {
  const [listType, setListType] = useState<'LIST' | 'GRID'>('LIST');

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
              <img src="/images/mindmap/cake-mindmap.svg" alt="마인드맵 임시" />
            </ChartPlaceholder>
          </GrayRoundedBox>
          <GrayRoundedBox>
            <GrayRoundedBoxTop>
              <span>{originalSearchKeyword}</span>
              <div className="flex items-center gap-2">
                <i
                  className={clsx('cursor-pointer text-[1.4rem]', {
                    'text-[#D33B4D]': listType === 'LIST',
                  })}
                  onClick={() => setListType('LIST')}
                >
                  <FaList />
                </i>
                <i
                  className={clsx('cursor-pointer text-2xl', {
                    'text-[#D33B4D]': listType === 'GRID',
                  })}
                  onClick={() => setListType('GRID')}
                >
                  <LuLayoutGrid />
                </i>
              </div>
            </GrayRoundedBoxTop>
            <GrayRoundedBottom>
              {listType === 'LIST' ? (
                <GridList>
                  {Array.from({ length: 5 }, (_, index) => index + 1).map(
                    (_, index) => (
                      <GridListItem key={index}>
                        <ListImage>
                          <img
                            src="/images/posts/cake.jpeg"
                            alt="게시글 케이크 이미지"
                          />
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
              ) : (
                listType === 'GRID' && (
                  <div className="h-[18rem] overflow-scroll">
                    <div className="grid grid-cols-2 gap-3">
                      {Array.from({ length: 5 }, (_, index) => index + 1).map(
                        (_, index) => (
                          <div
                            className="aspect-video overflow-hidden rounded"
                            key={index}
                          >
                            <img
                              src="/images/posts/cake.jpeg"
                              alt="게시글 케이크 이미지"
                              className="aspect-video w-full object-cover object-center"
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )
              )}
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
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
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

const GrayRoundedBottom = styled.div`
  margin-top: 1rem;
`;

const GridList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 18rem;
  overflow: scroll;
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
