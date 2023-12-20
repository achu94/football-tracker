import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Menu } from 'semantic-ui-react'
import NavbarMb from "./NavbarMb"
import NavbarLg from "./NavbarLg"

export default function Navbar() {
  const [activeItem, setactiveItem] = useState("home")
  const handleItemClick = (e: React.MouseEvent, { name }: { name: string }) => setactiveItem(name)

  const renderLinks = () => {
    return <>
      <Menu.Item
        name='logo'
        active={activeItem === 'logo'}
        onClick={() => handleItemClick}
      >
        <img src="/icons/premier-league.svg" width="35px" height="35px" style={{ margin: "0 auto", filter: "invert(1)" }} alt=" Football Tracker" />
      </Menu.Item>
      <Menu.Item
        name='live'
        active={activeItem === 'live'}
        onClick={() => handleItemClick}
      />
      <Menu.Item
        name='countries'
        active={activeItem === 'countries'}
        onClick={() => handleItemClick}
      />
      <Menu.Item
        name='leagues'
        active={activeItem === 'leagues'}
        onClick={() => handleItemClick}
      />
      <Menu.Item
        name='login'
        active={activeItem === 'login'}
        onClick={() => handleItemClick}
        position="right"
      />
      <Menu.Item
        name='sign_in'
        active={activeItem === 'sign_in'}
        onClick={() => handleItemClick}
      />
    </>
  }

  const none = useMediaQuery({ query: "(max-width:576px)" })
  const sm = useMediaQuery({ query: "(min-width:576px)" })
  const md = useMediaQuery({ query: "(min-width:768px)" })
  const lg = useMediaQuery({ query: "(min-width:992px)" })
  const xl = useMediaQuery({ query: "(min-width:1200px)" })
  const xxl = useMediaQuery({ query: "(min-width:1400px)" })
  const size = { none, sm, md, lg, xl, xxl }

  return (
    <div>
      {size.sm ? <NavbarLg renderLinks={renderLinks} /> : <NavbarMb renderLinks={renderLinks} />}
    </div>
  )
}