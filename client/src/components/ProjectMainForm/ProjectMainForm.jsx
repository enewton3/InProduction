import { Button, TextField } from "@material-ui/core";
// import { DateTimePicker } from "@material-ui/pickers";

export default function ProjectMainForm(props) {
  const { formData, setFormData, handleSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleUpload = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     image: file,
  //   }));
  // };

  return (
    <form
      className="main-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <TextField
        className="project-form-input"
        name="name"
        label="Project Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        className="project-form-input"
        name="venue"
        label="Venue"
        variant="outlined"
        value={formData.venue}
        onChange={handleChange}
      />
      <TextField
        className="project-form-input"
        name="url"
        label="URL"
        variant="outlined"
        value={formData.url}
        onChange={handleChange}
      />
      <TextField
        className="project-form-input"
        name="image_url"
        label="Image URL"
        variant="outlined"
        value={formData.image_url}
        onChange={handleChange}
      />
      {/* <input
        // accept="image/*"
        type="file"
        name="image"
        // value={formData.image}
        onChange={(e) => handleUpload(e)}
      /> */}
      <TextField
        className="project-form-input"
        name="description"
        label="Description"
        variant="outlined"
        value={formData.description}
        onChange={handleChange}
      />
      <div className="date-inputs">
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          name="start_date"
          className="input-form-start-date"
          variant="outlined"
          value={formData.start_date}
          onChange={handleChange}
        />
        <TextField
          id="end-date"
          label="End Date"
          type="date"
          name="end_date"
          className="input-form-end-date"
          variant="outlined"
          value={formData.end_date}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="outlined">
        Submit!
      </Button>
    </form>
  );
}
