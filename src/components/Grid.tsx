import styled from "styled-components";

/**
 * Types
 */
export interface GridProps {
  gap?: string;
  column?: string;
  rows?: string;
  columns?: string;
  direction?: "rtl" | "ltr";
  align?: "left" | "right" | "center";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "initial" | "inherit";
}

const Grid = styled.div<GridProps>`
  display: grid;
  align-items: ${({ align }) => align};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  grid-column-gap: ${({ gap }) => gap};
  grid-column: ${({ column }) => column};
  grid-template-rows: ${({ rows }) => rows};
  grid-template-columns: ${({ columns }) => columns};
`;

export default Grid;
