import React from "react";
import "./App.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Posts } from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <Menu borderless inverted pointing color="blue">
        <Container>
          <Menu.Item header active>
            Home
          </Menu.Item>
          <Menu.Item>New feature</Menu.Item>
          <Menu.Item>Press</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Container>
      </Menu>
      <Grid container stackable>
        <Grid.Row>
          <Segment basic>
            <Header as="h1" size="huge">
              <Header.Content>
                <Image
                  src="https://www.autofi.com/wp-content/uploads/logo-autofi-color@2x.png"
                  size="small"
                />
              </Header.Content>
              <Header.Subheader>
                BUILD TRUST. MAINTAIN CONTROL.
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={11}>
            <Posts />
            <Divider hidden />
            <Button basic circular size="huge">
              <a href="#root">Previous</a>
            </Button>{" "}
            <Button basic circular size="huge">
              <a href="#root">Next</a>
            </Button>
            <Divider hidden />
          </Grid.Column>
          <Grid.Column width={4} floated="right">
            <Segment secondary>
              <Header as="h4">About</Header>
              <p>
                Etiam porta <i>sem malesuada magna mollis euismod</i>. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </Segment>
            <Header as="h4">Archives</Header>
            <List>
              <List.Item as="a">Septempber 2021</List.Item>
              <List.Item as="a">August 2021</List.Item>
              <List.Item as="a">June 2021</List.Item>
              <List.Item as="a">April 2021</List.Item>
              <List.Item as="a">March 2021</List.Item>
              <List.Item as="a">February 2021</List.Item>
              <List.Item as="a">January 2021</List.Item>
              <List.Item as="a">December 2020</List.Item>
              <List.Item as="a">October 2020</List.Item>
              <List.Item as="a">July 2020</List.Item>
              <List.Item as="a">July 2020</List.Item>
              <List.Item as="a">May 2020</List.Item>
              <List.Item as="a">April 2020</List.Item>
              <List.Item as="a">January 2020</List.Item>
            </List>
            <Header as="h4">Elsewhere</Header>
            <List>
              <List.Item as="a" href="https://twitter.com/autofi_inc">
                Twitter
              </List.Item>
              <List.Item as="a" href="https://www.facebook.com/GetAutoFi/">
                Facebook
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment secondary as="footer">
        <Container textAlign="center">
          <p>
            Blog template built for Semantic-UI by{" "}
            <a href="https://semantic-ui-forest.com">@Semantic-UI-Forest</a>.
          </p>
          <a href="#root">Back to top</a>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
