import React from 'react'
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config"
import { signOut } from "firebase/auth"
import { nameCapitalize } from "../nameSplitter"
function Navbar() {
    const [user] = useAuthState(auth)
    console.log(user, ">>?>?")

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
                <NavItem className='mt-1'>
                    {
                        user &&
                        <>
                            <span className='me-5 h6'>

                                Welcome {nameCapitalize(user.displayName)}
                            </span>
                            <Button color="primary" onClick={() => signOut(auth)}>
                                Log out
                            </Button>
                        </>
                    }
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar;