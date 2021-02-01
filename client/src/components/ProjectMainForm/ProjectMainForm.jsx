import { Button, TextField } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";

export default function ProjectMainForm(props) {
  const { formData, setFormData, handleSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="main-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <TextField
        classname="project-form-input"
        name="name"
        label="Project Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        classname="project-form-input"
        name="venue"
        label="Venue"
        variant="outlined"
        value={formData.venue}
        onChange={handleChange}
      />
      <TextField
        classname="project-form-input"
        name="url"
        label="URL"
        variant="outlined"
        value={formData.url}
        onChange={handleChange}
      />
      <input type="file"></input>
      <TextField
        classname="project-form-input"
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
          defaultValue="2021-01-01"
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
          defaultValue="2021-01-02"
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
