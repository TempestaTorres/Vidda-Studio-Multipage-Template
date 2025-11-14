
export class ValidationService {

    static emailValidator(control) {

        let result = {
            error: false,
            message: 'success',
        }
        result.error = !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|ru)\b/.test(control.value);

        if (result.error) {
            result.message = 'invalid email address';
        }
        return result;
    }
}
