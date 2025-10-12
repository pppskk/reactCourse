import { useState } from "react";

function AddForm({ addProduct }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event){
    event.preventDefault()
    addProduct({ name, type, imageURL });

  }

  return (
    <>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input name="imageURL" type="text" id="imageURL" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input name="type" type="text" id="type" value={type} onChange={(event) => setType(event.target.value)} />
        </div>

        <button type="submit">Add product</button>
      </form>
    </>
  );

}

export default AddForm;
