import React from "react";
import {Element} from 'react-scroll';
import { IconButton } from "@mui/material";
import {Facebook,Instagram,LinkedIn} from '@mui/icons-material';
import './Contacts.css';

function Contacts() {
    return(
        <Element name="contact" className="contact_Container">
            <h1>CONTACT</h1>
            <div className="contact_details">
                <h4>Email:<span>jacsonnikil090@gmail.com</span></h4>
                <h4>Phone:<span>7904995833</span></h4>
            </div>
            <div className="contact_icons">
                <a href="https://www.linkedin.com/in/nikil-jacson-b48452246/">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/nikjax.nikjax?mibextid=ZbWKwL">
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
                <a href="https://instagram.com/imnikjackie?igshid=ZDdkNTZiNTM=">
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
        </Element>
    );
}
export default Contacts;