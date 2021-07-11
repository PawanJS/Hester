import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#fff" : "#df7c6d")};
  color: ${({ primary }) => (primary ? "#df7c6d" : "#fff")};
  white-space: nowrap;
  font-size: 1.9rem;
  font-weight: 500;
  display: inline-block;
  outline: none;
  border: none;
  padding: 2.2rem 3.8rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`
