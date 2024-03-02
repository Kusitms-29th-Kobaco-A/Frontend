import styled from 'styled-components';

import RelatedKeywords from './RelatedKeywords';

const SearchBar = () => {
  return (
    <>
      <SearchBarBlock>
        <SearchBarContentBlock>
          <SearchBarInputBlock>
            <i>
              <img src="/icons/search-icon.svg" alt="검색 아이콘" />
            </i>
            <SearchBarInput
              type="text"
              placeholder="검색어를 입력하세요. (예시: 케이크)"
            />
          </SearchBarInputBlock>
          <SearchBarButton>검색</SearchBarButton>
        </SearchBarContentBlock>
      </SearchBarBlock>
      <RelatedKeywords />
    </>
  );
};

export default SearchBar;

const SearchBarBlock = styled.div`
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
`;

const SearchBarContentBlock = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  width: 100%;
  font-size: 1.25rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
`;

const SearchBarInputBlock = styled.div`
  flex: 1;
  display: flex;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
`;

const SearchBarInput = styled.input`
  border: none;
  flex: 1;
  outline: none;
  font-size: 1.125rem;

  &::placeholder {
    color: #bfc7d1;
  }
`;

const SearchBarButton = styled.button`
  background-color: #d33b4d;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin: 0.5rem 0.5rem;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;
