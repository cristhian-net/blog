import React from "react";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

const CommentsLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader>Loading comments</Loader>
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default CommentsLoader;
