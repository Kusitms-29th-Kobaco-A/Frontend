import { useState } from 'react';
import styled from 'styled-components';
import { FaList } from 'react-icons/fa6';
import { LuLayoutGrid } from 'react-icons/lu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  originalSearchKeyword: string;
  data: any;
}

const BottomArea = ({ originalSearchKeyword, data }: Props) => {
  const [listType, setListType] = useState<'LIST' | 'GRID'>('LIST');

  return (
    <WhiteBoxGroupBottom>
      <WhiteRoundedBox>
        <IconWrapper>
          <i>
            <img src="/icons/search-icon.svg" alt="검색 아이콘" />
          </i>
          <span>네이버 블로그 인기검색어 TOP10</span>
        </IconWrapper>
        <GrayRoundedBoxGroup>
          <GrayRoundedBox>
            <IconWrapperGroup>
              <IconWrapper>
                <span>연관어</span>
              </IconWrapper>
            </IconWrapperGroup>
            <ChartPlaceholder>
              <img src={data.postMindmap} alt="마인드맵 임시" />
            </ChartPlaceholder>
          </GrayRoundedBox>
          <GrayRoundedBoxRight>
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
                  {data.postData.map((post: any) => (
                    <GridListItem to={post.link} target="_blank" key={post.id}>
                      <ListImage>
                        <img src={post.imageUrl} alt="게시글 케이크 이미지" />
                      </ListImage>
                      <ListContent className="w-full">
                        <h3 className="h-[1.25rem] overflow-hidden">
                          {post.title}
                        </h3>
                        <p className="h-[2.5rem] overflow-hidden">
                          {post.description}
                        </p>
                      </ListContent>
                    </GridListItem>
                  ))}
                </GridList>
              ) : (
                listType === 'GRID' && (
                  <div className="h-[18rem] overflow-scroll">
                    <div className="grid grid-cols-2 gap-3">
                      {data.postData.map((post: any) => (
                        <Link
                          to={post.link}
                          target="_blank"
                          className="aspect-video overflow-hidden rounded"
                          key={post.id}
                        >
                          <img
                            src={post.imageUrl}
                            alt="게시글 이미지"
                            className="aspect-video w-full object-cover object-center"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </GrayRoundedBottom>
          </GrayRoundedBoxRight>
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
  flex: 3;
`;

const GrayRoundedBoxRight = styled.div`
  background-color: #f4f6f6;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
  flex: 2;
`;

const GrayRoundedBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GrayRoundedBottom = styled.div`
  margin-top: 1rem;
`;

const GridList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 18rem;
  overflow: scroll;
`;

const GridListItem = styled(Link)`
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
    height: 110%;
    object-fit: cover;
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
