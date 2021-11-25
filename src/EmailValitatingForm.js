import React from "react";
import useEmailValidation  from "./useEmailValidation";

function EmailValidatingForm() {
  const { setEmail, email, emailValid, count, setCount } = useEmailValidation(30);
  
  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} disabled={count <= 0} value={email} type="email" />
      <p>{emailValid ? 'válido' : 'inválido' }</p>
      <p>{count}</p>
    </div>
  )
}

export default EmailValidatingForm
