import styled from "styled-components";
import { rem } from "polished";

/**
 * Types
 */
export interface VariantProps {
  image?: string;
}

const Variant = styled.div<VariantProps>`
  background: ${(props) => props.theme.colors.black}
    url(${(props) => props.image}) center / cover;
  padding: ${rem(20)};
  margin-bottom: ${rem(15)};
  border-radius: ${rem(40)};
  width: ${rem(150)};
  height: ${rem(150)};
  position: relative;

  span {
    margin-top: ${rem(14)};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

export default Variant;
