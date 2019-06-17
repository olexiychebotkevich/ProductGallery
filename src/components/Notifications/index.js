import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';

const Container = styled.div`
    background-color: ${props => props.color};
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;

    >i {
        margin-left: 8px;
    }
`;

const emitter = new ee();
export const notify = (msg, color) => {
    emitter.emit('notification', msg, color);
}

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: -100,
            msg: '',
            color: '#444'
        };
        emitter.on('notification', (msg, color) => {
            this.showNotification(msg, color);
        });
    }
    showNotification = (msg, color) => {
        this.setState({ top: 16, msg: msg, color: color },
            () => {
                setTimeout(() => {
                    this.setState({ top: -100 });
                }, 3000);
            });
    }
    render() {
        const { top, msg, color } = this.state;
        return (
            <React.Fragment>
                {/* <button onClick={this.showNotification}>Show message</button> */}
                <Container top={top} color={color}>{msg}<i className="fa fa-bell"></i></Container>
            </React.Fragment>
        );
    }
}