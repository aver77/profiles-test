class Methods {
    clickOutside(ref, showHandler) {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                showHandler(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }
    validation(e, login, password, loginClass, passwordClass) {
        const logWarning = document.querySelector(loginClass);
        const passWarning = document.querySelector(passwordClass);
        e.preventDefault();
        if (login && password) {
            let logRexp = /^[a-z\d]+$/i;
            if (!logRexp.test(login)) this.formStyle(logWarning, 'Можно вводить только буквы лат. алфавита и цифры');
            else {
                if (login !== 'user' && login !== "admin") this.formStyle(logWarning, 'Подсказка: логин - user или admin');

                if (+password !== 123) this.formStyle(passWarning, 'Подсказка: пароль - 123');

                if ((login === 'user' || login === "admin") && +password === 123) return true;
            }
        }
        else {
            if (!login) this.formStyle(logWarning, 'Логин не должен быть пустым!')
            if (!password) this.formStyle(passWarning, 'Пароль не должен быть пустым!')
        }
        return false;
    }
    formStyle(elem, text) {
        elem.style.display = 'block';
        elem.innerText = text;
    }
}
export default Methods;