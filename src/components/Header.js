import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HeaderAvatar, HeaderSearch, HeaderLeft, HeaderRight, HeaderContainer } from "./Header.styles"

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                    
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search Messages'/>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;

