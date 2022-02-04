class LogData {
    _userLogin = 'user';
    _userPassword = 123;
    _adminLogin = 'admin';
    _adminPassword = 123;
    userLogin() {
        return this._userLogin
    }
    userPassword() {
        return this._userPassword;
    }
    adminLogin() {
        return this._adminLogin
    }
    adminPassword() {
        return this._adminPassword;
    }
}
export default LogData;