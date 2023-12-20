import React, { useState } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

interface NavbarMbProps {
    renderLinks: () => React.ReactNode;
}

function Overlay() {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.795)",
            position: "fixed",
            height: "110vh",
            width: "100%",
        }} />
    )
}

function HamIcon() {
    return (<i className="big bars icon inverted" />)
}

function CloseIcon() {
    return (<i className="big close red icon" />)
}

function NavbarMb({ renderLinks }: NavbarMbProps) {
    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(HamIcon)
    const hideSidebar = () => {
        setIcon(HamIcon)
        setVisible(false)
    }
    const showSidebar = () => {
        setIcon(CloseIcon)
        setVisible(true)
    }
    const toggleSidebar = () => {
        visible ? hideSidebar() : showSidebar()
    }
    return (
        <>
            {visible && <Overlay />}
            <Menu inverted
                size="tiny"
                borderless
                attached
            >
                <Menu.Item>
                    <img src="/icons/premier-league.svg" width="35px" height="35px" style={{ margin: "0 auto", filter: "invert(1)" }} alt=" Football Tracker" />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item onClick={toggleSidebar}>
                        {icon}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Sidebar as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={visible}
                width='thin'
            >
                {renderLinks()}
            </Sidebar>
        </>
    )
}

export default NavbarMb;