import React from 'react'
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <Nav pills>
                <NavItem>
                    <NavLink
                        active
                    >
                        <Link to="/" style={{ color: "white" }}>
                            Home
                        </Link>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink >
                        <Link to="/addBlog">
                            Publish New Blog
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar;