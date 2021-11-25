import { useReducer, useState } from "react";
import useInterval from "./useInterval";


function useEmailValidation(maxSeconds) {
    const validateEmail = (email) => {
        const re = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)+$/i;
        console.log(re.test(email), email)
        return re.test(email);
    };

    const [emailValid, setEmailValid] = useState(false);

    const emailReducer = (state, action) => {
        setEmailValid(validateEmail(action));
        return action;
    };

    const [email, setEmail] = useReducer(emailReducer, "");

    const [count, setCount] = useState(maxSeconds);

    useInterval(() => {
        setCount(count - 1);
    }, 1000);

    return { setEmail, email, emailValid, count, setCount }
}

export default useEmailValidation