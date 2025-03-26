export const checkValidate = (email, password) => {
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailValid) return 'email is not valid';
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if (!passwordValid) return 'password is not valid';

    return null;
};
