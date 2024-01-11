import React from "react";
import { useState } from "react";
import db from "./Firebase";
import uniqueSlug from "unique-slug";



function Input() {
  const [input, setinput] = useState("");
  const [code, setcode] =useState('');
  

  async function handledb() {
    const slug = uniqueSlug();
    await db.collection("urls").add({
      url: input,
      slugs: slug
    });
    setcode(`${window.location.origin}/${slug}`);
  }
  return (
    <div className="container">
      <h1 className="mt-5">URL Shortner</h1>
      <center>
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            disabled
            value={code}
          />
          <input
            type="url"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="form-control mt-3"
            placeholder="Enter URL"
          />
          <button onClick={handledb} className="btn-btn-dark mt-3">
            shorthenLink
          </button>
        </div>
      </center>
    </div>
  );
}

export default Input;
