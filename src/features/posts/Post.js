import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentsAsync } from "./postsSlice";
import { default as CustomComment } from "../comments/CustomComment";
import {
  Modal,
  Button,
  Header,
  Divider,
  Form,
  Comment,
} from "semantic-ui-react";
import CommentsLoader from "../comments/CommentsLoader";
import { useInput } from "../../hooks/useInput";

const Post = ({ post }) => {
  const { id, title, body, comments } = post;
  const { value, bind, reset } = useInput("");
  const { commentsLoading } = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setOpen(true);
    dispatch(getCommentsAsync(id));
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onOpenModal = () => {
    setOpen(true);
  };

  const handleAddComment = () => {
    const comment = {
      postId: id,
      id: Date.now(),
      name: "Cristhian",
      email: "cvalencia@sparkdigital.com",
      body: value,
    };
    dispatch(addComment(comment));
    reset();
  };

  return (
    <>
      <Header size="large" as="h2">
        <Header.Content>{title}</Header.Content>
        <Header.Subheader>
          Sep 15, 2021 by <a href="#root">Cristhian</a>
        </Header.Subheader>
      </Header>
      <Divider hidden />
      <p>{body}</p>
      <Button onClick={onClick}>View more</Button>
      <Modal onClose={onCloseModal} onOpen={onOpenModal} open={open}>
        <Modal.Content>
          {commentsLoading && <CommentsLoader />}
          {!commentsLoading && (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {comments && comments.length === 0 && (
                <h3>
                  There are no comments. Be the first one to add a comment!
                </h3>
              )}
              {comments &&
                comments.length > 0 &&
                comments.map((c, i) => <CustomComment key={i} comment={c} />)}

              <Form reply>
                <Form.TextArea {...bind} />
                <Button
                  content="Add comment"
                  labelPosition="left"
                  icon="edit"
                  primary
                  onClick={handleAddComment}
                />
              </Form>
            </Comment.Group>
          )}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Post;
