import { Fragment, useState, ChangeEvent } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

interface PostsListInterface {
  isPosting: Boolean;
  onStopPosting: () => void;
}

const PostsList = ({ isPosting, onStopPosting }: PostsListInterface) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <Fragment>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={(e) => setBody(e.target.value)}
            onAuthorChange={setAuthor}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={author} text={body} />
        <Post author="Karis" text="Django guru" />
      </ul>
    </Fragment>
  );
};

export default PostsList;
