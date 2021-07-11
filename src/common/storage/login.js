/*
 * @Author: ywl
 * @LastEditors: ywl
 */
const APP_LOGIN_NAME = "APP_LOGIN_NAME"

export const checkLogin = () => {
    return !!sessionStorage.getItem('APP_LOGIN_NAME');
}

export const saveLogin = (user) => {
    sessionStorage.setItem(APP_LOGIN_NAME, JSON.stringify(user));
}