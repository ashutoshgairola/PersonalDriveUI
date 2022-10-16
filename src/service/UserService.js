import axios from "axios";

export function login(email, password) {
  return axios.post(process.env.VUE_APP_SERVER_PATH+ "users/login", {
    email: email,
    password: password,
  });
}

export function signup(fullName, email, password) {
  console.log(process.env, "$#@#$@$#@#$@$#@$#");
  return axios.post(process.env.VUE_APP_SERVER_PATH+ "users/signup", {
    fullName,
    email,
    password,
  });
}

export function update(fullName, email, password, passOld) {
  return axios.patch(
    process.env.VUE_APP_SERVER_PATH+ "users/" + sessionStorage.getItem("id"),
    {
      fullName,
      email,
      password,
      passOld,
    }
  );
}

export function files(id, auth_token) {
  return axios.get(process.env.VUE_APP_SERVER_PATH+ "users/" + id, {
    headers: {
      "Content-Type": "multipart/form-data",
      token: "Bearer " + sessionStorage.getItem("auth_token"),
    },
  });
}

