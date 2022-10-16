import axios from "axios";

export function upload(formData) {

  return axios.post(
    process.env.VUE_APP_SERVER_PATH+ "users/upload/" + sessionStorage.getItem("id"),
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: "Bearer " + sessionStorage.getItem("auth_token"),
      },
    }
  );
}

export function delete_file(name) {
  return axios.delete(
    process.env.VUE_APP_SERVER_PATH+
      "users/delete/" +
      sessionStorage.getItem("id") +
      "/" +
      name
  );
}

export function getDetails(name) {
  return axios.get(
    process.env.VUE_APP_SERVER_PATH+
      "users/file/" +
      sessionStorage.getItem("id") +
      "/" +
      name
  );
}
