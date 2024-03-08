import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  searchKeyword: string;
}

const SearchTopFixed = ({ searchKeyword }: Props) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [shouldRender, setShouldRender] = useState(!isAtTop);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtTop) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isAtTop]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollY > sectionTop - 300) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {shouldRender && (
        <SearchTopFixedBlock
          className={clsx(
            'fade-in fixed top-[10.125rem] z-30 w-full bg-white py-4 transition duration-200',
            {
              'fade-in': !isAtTop,
              'fade-out': isAtTop,
            },
          )}
        >
          <div className="mx-auto flex w-[1024px] items-center">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F4F6F6] px-6 py-3">
              <i>
                <img src="/icons/search-icon.svg" alt="검색 아이콘" />
              </i>
              <span>{searchKeyword}</span>
            </div>
            <ul className="ml-12 flex items-center gap-6">
              <li>
                <Link
                  to="/trend-analysis?scroll_to=keyword-trend"
                  className={clsx(
                    'block rounded-full px-4 py-1.5 font-medium duration-200',
                    {
                      'bg-[#D33B4D] text-white':
                        activeSection === 'keyword-trend',
                      'text-[#C3C6CB]': activeSection !== 'keyword-trend',
                    },
                  )}
                >
                  검색어 트렌드
                </Link>
              </li>
              <li>
                <Link
                  to="/trend-analysis?scroll_to=related-trend"
                  className={clsx(
                    'block rounded-full px-4 py-1.5 font-medium duration-200',
                    {
                      'bg-[#D33B4D] text-white':
                        activeSection === 'related-trend',
                      'text-[#C3C6CB]': activeSection !== 'related-trend',
                    },
                  )}
                >
                  연관어 트렌드
                </Link>
              </li>
              <li>
                <Link
                  to="/trend-analysis?scroll_to=sns-trend"
                  className={clsx(
                    'block rounded-full px-4 py-1.5 font-medium duration-200',
                    {
                      'bg-[#D33B4D] text-white': activeSection === 'sns-trend',
                      'text-[#C3C6CB]': activeSection !== 'sns-trend',
                    },
                  )}
                >
                  소셜 미디어 트렌드
                </Link>
              </li>
            </ul>
          </div>
        </SearchTopFixedBlock>
      )}
    </>
  );
};

export default SearchTopFixed;

const SearchTopFixedBlock = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.fade-in {
    animation: fadeIn 0.2s ease-in-out;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-out {
    animation: fadeOut 0.2s ease-in-out;
  }
`;
