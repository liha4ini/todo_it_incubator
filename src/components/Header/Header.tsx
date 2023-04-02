import React from 'react';

import {MultiButton} from "../MultiButton/MultiButton";

import logo from '../../assets/hrello.png';
import './Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import FilterListIcon from '@material-ui/icons/FilterList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
        <div className='header'>
            <div className='header_left_section'>
                <img className='header_logo' src={logo} alt="logo"/>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button'}
                >
                    <span>Workspaces</span>
                    <span><ExpandMoreIcon style={{marginTop: '5px'}}/></span>
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button'}
                >
                    <span>Recent</span>
                    <span><ExpandMoreIcon style={{marginTop: '5px'}}/></span>
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button'}
                >
                    <span>Templates</span>
                    <span><ExpandMoreIcon style={{marginTop: '5px'}}/></span>
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button create_button'}
                >
                    <span>Filter</span>
                    <span><FilterListIcon style={{width: '20px', marginLeft: '5px'}}/></span>
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button create_button'}
                >
                    <span>Create</span>
                    <span><BorderColorIcon style={{width: '20px', marginLeft: '5px'}}/></span>
                </MultiButton>
            </div>
            <div className='header_right_section'>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button_right'}
                >
                    <span><SearchIcon
                        style={{width: '30px', height: '30px', marginTop: '3px'}}
                    /></span>
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button_right'}
                >
                    <NotificationsNoneIcon
                        style={{width: '30px', height: '30px'}}
                    />
                </MultiButton>
                <MultiButton
                    callBack={() => {
                    }}
                    className={'header_button_right'}
                >
                        <AccountCircleIcon
                            style={{width: '30px', height: '30px', color: '#5c8adc'}}
                        />
                </MultiButton>
            </div>
        </div>
    );
};

export default Header;