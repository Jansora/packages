import React from 'react';
import {Header, Portal, Segment} from "semantic-ui-react";
import {Divider} from "antd";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const MaterialPortal = (props) => {

    const dark = GetDarkMode();

    const defaultStyle = {
        left: '40%',
        minWidth: 500,
        position: 'fixed',
        top: '100px',
        zIndex: 1000,
    }
    const style = props.style ? {...defaultStyle, ...props.style} : defaultStyle;
    return (
        <Portal closeOnTriggerClick openOnTriggerClick trigger={props.trigger ? props.trigger : <div></div>}>
            <Segment inverted={dark} style={style}>
                <Header as={'h3'} textAlign="center"> {props.title} </Header>
                <Divider style={{marginBottom: 0 , marginTop: 5}} />
                {
                    props.children
                }
            </Segment>
        </Portal>
    )
}

export default MaterialPortal;