import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Modal, Input, Button } from "semantic-ui-react";

let endpoint = "http://localhost:9000";

class CityLife extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            items: [],
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount() {
        this.getEvents();
    }

    render() {
        return (
            <div>
                <Header as="h2">City Life</Header>
                <div>
                <Button icon='plus' content='Create Event' onClick={this.handleOpen} />

                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                >
                    <Modal.Header>Create an Event</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <label>Title</label>
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder="Event title"
                                    onChange={this.onChange}
                                    value={this.state.title}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <Input
                                    type="text"
                                    name="description"
                                    placeholder="Event description"
                                    onChange={this.onChange}
                                    value={this.state.description}
                                />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
                <div className="row">
                    <Card.Group>
                        {this.state.items}
                    </Card.Group>
                </div>
            </div>
        );
    }

    onSubmit = () => {
        this.handleClose();
        if (this.state.title) {
            axios.post(endpoint + "/api/event", {
                "title": this.state.title,
                "description": this.state.description
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).catch((err) => {
                console.log(err)
            }).then((res) => {
                this.getEvents();
                this.setState({ event: "" });
                console.log(res);
            });
            
        }
    }

    getEvents = () => {
        axios.get(endpoint + '/api/events', {
            headers: {
                "Content-Type": "application/json",
            }
        }).catch((err) => {
            console.log(err)
        }).then((res) => {
            if (res?.data) {
                console.log(res.data);
                this.setState({
                items: res.data.map((item) => {
                    let color = "orange";
                    let style = {
                        textDecoration: "none"
                    };

                    return (
                        <Card key={item._id} color={color}>
                            <Card.Content>
                                <Card.Header style={style}>{item.title}</Card.Header>
                                <Card.Meta>{item.description}</Card.Meta>
                                <Card.Description>
                                    <Button onClick={() => this.deleteEvent(item._id)}>Delete</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    );
                }),
            });
            } else {
                this.setState({ items: [] });
            }
        });
    }

    deleteEvent = (eventId) => {
        axios.delete(endpoint + "/api/event/" + eventId, {
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).catch((err) => {
            console.log(err)
        }).then(() => {
            this.getEvents();
        });
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });
}

export default CityLife;