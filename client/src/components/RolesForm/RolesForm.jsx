// import { TextField } from "@material-ui/core";
// import AutoComplete from "@material-ui/lab/Autocomplete";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getProjectRoles } from "../../services/roles";
// import { getAllUsers } from "../../services/users";

export default function RolesForm(props) {
  // const { formData, setFormData } = useState({});
  // const { project } = props;
  // const params = useParams();

  // const [roles, setRoles] = useState([]);
  // const [users, setUsers] = useState([]);

  // const fetchRoles = async () => {
  //   const project_roles = await getProjectRoles(params.id);
  //   setRoles(project_roles);
  // };

  // const fetchUsers = async () => {
  //   const users = await getAllUsers();
  //   setUsers(users);
  // };

  // const fetchFormData = () => {
  // const usernames = users.map((item) => item.username);
  // const rolenames = roles.map((item) => item.role.role);
  //return an object with role names as keys and user names as values
  // };

  // useEffect(() => {
  //   fetchRoles();
  //   fetchUsers();
  // }, [params.id]);

  // useEffect(() => {
  //   fetchFormData();
  // }, [users, roles]);
  // const defaultProps = {
  //   options: users,
  //   getOptionLabel: (user) => user.name,
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };

  return (
    <div>
      {roles.map((role) => {
        const roleId = role.role.id;
        return (
          <div></div>
          // <AutoComplete
          //   id="auto-complete"
          //   name={roleId}
          //   options={users}
          //   value={formData[roleId]}
          //   onChange={(e) => handleChange(e)}
          //   renderInput={(params) => (
          //     <TextField {...params} label="role" margin="normal" />
          //   )}
          // />
          // );
        );
      })}
    </div>
  );
}
