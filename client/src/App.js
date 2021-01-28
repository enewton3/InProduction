import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    prof_pic: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userData = new FormData(formData);
    const resp = await axios.post("http://localhost:3000/users", formData);
    console.log(resp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    debugger;
    setFormData({
      ...formData,
      prof_pic: file,
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="prof_pic"
          type="file"
          name="prof_pic"
          // value={formData.prof_pic}
          onChange={handleUpload}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
