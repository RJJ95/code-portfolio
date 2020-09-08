import API from "./api"

export default class Authorization extends API {
  login(email, password, remember) {
    return this.getAxios()
      .post("/login", {
        email: email,
        password: password,
        remember: remember,
      })
      .then((result) => {
        let authToken = result.data.data
        return authToken
      })
      .catch((error) => this.handleError("Error logging in", error))
  }

  // Health endpoint
  health() {
    return this.getAxios()
      .get("/login")
      .then((result) => {
        return this.getData(result)
      })
      .catch((error) => {
        console.log("Error with health: ", error)
      })
  }

  // Confirms the sign up through the link on the email sent to the user
  confirmSignup(params) {
    return this.getAxios()
      .get("/confirmSignup", params)
      .then((result) => {
        return this.getData(result)
      })
      .catch((error) => {
        console.log("Error with confirming signup: ", error)
      })
  }

  // Resets the password for the user's account
  resetPassword(password, passwordConfirmation, token) {
    return this.getAxios()
      .patch("/resetPassword", {
        password: password,
        password_confirmation: passwordConfirmation,
        token: token,
      })
      .then((result) => {
        console.log(result)
        return result
      })
      .catch((error) => this.handleError("Error resetting password", error))
  }

  // Resets the password for the user's account
  resetPasswordEmail(data) {
    return this.getAxios()
      .post("/resetPasswordEmail", data)
      .then((result) => {
        return result.status
      })
      .catch((error) => {
        return error.response.status
      })
  }
}
