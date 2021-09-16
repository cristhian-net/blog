import { useMemo } from "react";
import { Comment } from "semantic-ui-react";

const avatars = ["matt", "joe", "jenny", "elliot"];

const CustomComment = ({ comment }) => {
  const { postId, id, name, email, body } = comment;
  const avatar = useMemo(
    () => avatars[Math.floor(Math.random() * avatars.length + 0)],
    [id]
  );
  return (
    <Comment>
      <Comment.Avatar
        src={`https://react.semantic-ui.com/images/avatar/small/${avatar}.jpg`}
      />
      <Comment.Content>
        <Comment.Author as="a">{name}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default CustomComment;
