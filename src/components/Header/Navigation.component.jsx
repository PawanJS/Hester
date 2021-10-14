import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { MenuData } from "../../data/MenuData"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { RiShoppingCartLine } from "react-icons/ri"
import Container from "../Ui/Container/Container.component"

class Navigation extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <Navbar>
        <Container>
          <MenuIcon onClick={this.handleClick}>
            {this.state.clicked ? <AiOutlineClose /> : <FaBars />}
          </MenuIcon>
          <NavigationMenu hidden={!this.state.clicked ? true : false}>
            {MenuData.map((item, index) => (
              <NavLink to={item.link} key={index}>
                {item.title}
              </NavLink>
            ))}
          </NavigationMenu>
          <NavigationLogo>
            <Link to="/">Hester</Link>
          </NavigationLogo>
          <NavigationActions>
            <NavLink to="/login">Login</NavLink>
            <CartIcon>
              <NavLink to="/cart">
                <RiShoppingCartLine />
              </NavLink>
            </CartIcon>
          </NavigationActions>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation

// Styled components
const Navbar = styled.nav`
  /* background: #e3b76a; */
  position: relative;
  z-index: 500;

  & > div {
    color: #fff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 3vw 4vw;

    @media screen and (max-width: 64em) {
      padding: 4vw 5vw;
    }
  }
`
const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.4s;

  @media screen and (max-width: 64em) {
    transform: ${({ hidden }) =>
      hidden ? "translateY(-100%)" : "translateY(0)"};

    background: #e1b66b;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: -1;
  }
`

const MenuIcon = styled.div`
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media screen and (max-width: 64em) {
    display: block;
  }
`

const NavigationLogo = styled.div`
  justify-self: center;
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  font-weight: 500;

  a {
    text-decoration: none;
    color: #fff;
  }
`
const NavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  margin-right: 1.8vw;
`

const NavigationActions = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`
const CartIcon = styled.div`
  a {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
