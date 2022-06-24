import styled from "styled-components";
import FooterRight from "./FooterRight";
import HeaderRight from "./HeaderRight";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function RightSide() {
  return (
    <Wrapper>
      <HeaderRight />
      <FooterRight />
    </Wrapper>
  );
}
