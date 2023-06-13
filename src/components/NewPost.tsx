import PostInterface from "../types/PostInterface";
import classes from "./NewPost.module.css";
import { useState, FormEvent } from "react";

interface NewPostInterface {
  onCancel: () => void;
  onAddPost: (data: PostInterface) => void;
}

const NewPost = ({ onCancel, onAddPost }: NewPostInterface) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: PostInterface = {
      body,
      author,
    };

    onAddPost(data);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
