import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;
  handleSearchSubmit: (e?: React.FormEvent) => void;
  isSearchFixedFocused: boolean;
  setIsSearchFixedFocused: (isSearchBarFocused: boolean) => void;
  originalSearchKeyword: string;
}

const SearchTopFixed = ({
  searchKeyword,
  setSearchKeyword,
  handleSearchSubmit,
  isSearchFixedFocused,
  setIsSearchFixedFocused,
  originalSearchKeyword,
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isAtTop, setIsAtTop] = useState(true);
  const [shouldRender, setShouldRender] = useState(!isAtTop);
  const [activeSection, setActiveSection] = useState('');

  const scrollContentOffset = 300;

  useEffect(() => {
    const handleScroll = () => {
      const section: HTMLElement | null =
        document.querySelector('#keyword-trend');
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollY > sectionTop - scrollContentOffset) {
          setIsAtTop(false);
        } else {
          setIsAtTop(true);
        }
      }
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
        if (scrollY > sectionTop - scrollContentOffset) {
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

  useEffect(() => {
    const onClick = (e: any) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setIsSearchFixedFocused(false);
        setSearchKeyword(originalSearchKeyword);
      }
    };
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isSearchFixedFocused]);

  return (
    <>
      {shouldRender && (
        <SearchTopFixedBlock
          className={clsx(
            'fade-in fixed top-[10rem] z-30 w-full border-b border-[#e6e6e6] bg-white py-4 transition duration-200',
            {
              'fade-in': !isAtTop,
              'fade-out': isAtTop,
            },
          )}
        >
          <div className="mx-auto flex w-[1024px] items-center">
            <form
              className={clsx(
                'flex h-[3rem] flex-1 items-center gap-2 rounded-full border  border-[#D33A4D] bg-[#F4F6F6] px-2 py-1.5 duration-150',
                {
                  'border-opacity-100': isSearchFixedFocused,
                  'border-opacity-0': !isSearchFixedFocused,
                },
              )}
              ref={formRef}
              onSubmit={handleSearchSubmit}
            >
              {!isSearchFixedFocused && (
                <i className="ml-2">
                  <img src="/icons/search-icon.svg" alt="검색 아이콘" />
                </i>
              )}
              <input
                type="text"
                ref={inputRef}
                value={searchKeyword}
                className={clsx('flex-1 bg-[#F4F6F6] outline-none', {
                  'ml-4': isSearchFixedFocused,
                  'text-[#707887]': !isSearchFixedFocused,
                })}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setIsSearchFixedFocused(true)}
              />
              <div
                className={clsx('cursor-pointer duration-200', {
                  'pointer-events-none opacity-0': !isSearchFixedFocused,
                  'opacity-100': isSearchFixedFocused,
                })}
                onClick={() => {
                  setSearchKeyword('');
                  inputRef.current?.focus();
                }}
              >
                <i className="block h-[1rem] w-[1rem]">
                  <img
                    src="/icons/input-x.svg"
                    alt="입력창 비우기 아이콘"
                    className="w-full"
                  />
                </i>
              </div>
              <button
                type="submit"
                className={clsx(
                  'h-[2rem] rounded-full bg-[#D33A4D] px-4 text-sm font-medium text-white duration-200',
                  {
                    'pointer-events-none opacity-0': !isSearchFixedFocused,
                    'opacity-100': isSearchFixedFocused,
                  },
                )}
              >
                검색
              </button>
            </form>
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
