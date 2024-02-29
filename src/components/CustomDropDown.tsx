// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import styled from "styled-components";
// import dropdownImg from "../assets/dropdown/DropdownArrow.svg";

// interface CustomDropdownProps {
//   dropdownLabel: string;
//   dropdownList: string[];
//   setFunction: (value: string) => void;
// }
// // 드롭다운 컴포넌트
// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//   dropdownLabel,
//   dropdownList,
//   setFunction,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // 드롭다운 토글
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <DropdownContainer>
//       <DropdownButton onClick={toggleDropdown}>
//         토픽 선택
//         <DropDownImg src={dropdownImg} alt="arrow" />
//       </DropdownButton>
//       <DropdownContent isOpen={isOpen}>
//         <DropdownItem onClick={() => setIsOpen(false)}>기술</DropdownItem>
//         <DropdownItem onClick={() => setIsOpen(false)}>커리어</DropdownItem>
//       </DropdownContent>
//     </DropdownContainer>
//   );
// };

// export default CustomDropdown;

// // 드롭다운 메뉴 스타일
// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;
// const DropdownButton = styled.button`
//   display: flex;
//   padding: 10px 10px 10px 20px;
//   align-items: center;
//   gap: 4px;
//   border: none;
//   border-radius: 8px;
//   background: var(--Gray-1, #f4f6f6);
//   color: var(--Gray-8, #373d49);

//   font-family: "Noto Sans KR";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 350;
//   line-height: 140%; /* 22.4px */
//   letter-spacing: -0.4px;
//   &:focus {
//     outline: none;
//   }
// `;

// const DropDownImg = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const DropdownContent = styled.div<{ isOpen: boolean }>`
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   padding: 12px 16px;
//   z-index: 1;
// `;

// const DropdownItem = styled.a`
//   padding: 10px 0;
//   text-decoration: none;
//   display: block;
//   color: black;

//   &:hover {
//     background-color: #ddd;
//   }
// `;
