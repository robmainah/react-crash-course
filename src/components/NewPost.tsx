import classes from "./NewPost.module.css";
import { ChangeEvent } from "react";

interface NewPostInterface {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: string) => void;
}

const NewPost = ({ onBodyChange, onAuthorChange }: NewPostInterface) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => onAuthorChange(e.target.value)}
        />
      </p>
    </form>
  );
};

export default NewPost;
