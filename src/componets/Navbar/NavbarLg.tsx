import { Menu, Segment } from 'semantic-ui-react'

interface NavbarLgProps {
  renderLinks: () => React.ReactNode;
}

export default function NavbarLg({ renderLinks }: NavbarLgProps) {
  return (
    <Segment inverted attached size='mini'>
      <Menu inverted secondary>
        {renderLinks()}
      </Menu>
    </Segment>
  )
}