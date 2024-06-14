const emailPattern = /^(?:(?!.*\.{2})[A-Za-z0-9._%+-]+)@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

function handleValidateEmail(email: string) {
    return emailPattern.test(email);
}

export default handleValidateEmail