import LoginService from "./services/LoginService.js";
import UserService from "./services/UserService.js";

export const registerServices = (app) => {
    app.provide("loginService", LoginService);
    app.provide("userService", UserService);
}