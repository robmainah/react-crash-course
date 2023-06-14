import PostInterface from "../types/PostInterface";
import classes from "../components/NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

// interface NewPostInterface {
//   onCancel: () => void;
//   onAddPost: (data: PostInterface) => void;
// }

const NewPost = () => {
  // const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");

  const onSubmit = async (e: FormEvent<FormData>) => {
    e.preventDefault();
    // const data: PostInterface = {
    //   body,
    //   author,
    // };

    // onAddPost(data);
  };

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  const data = Object.fromEntries(form);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return redirect("/");
};
