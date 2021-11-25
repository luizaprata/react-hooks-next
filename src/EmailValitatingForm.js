import { useReducer, useState } from "react";
import useInterval from "./useInterval";

function EmailValidatingForm() {
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

  const maxSeconds = 30;

  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);


  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} disabled={count <= 0} value={email} type="email" />
      <p>{emailValid ? 'válido' : 'inválido' }</p>
      <p>{count}</p>
    </div>
  )
}

export default EmailValidatingForm
