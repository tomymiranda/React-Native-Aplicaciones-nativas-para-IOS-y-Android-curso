import React from 'react'
import { useForm } from '../hooks/useForm';

export const Formulario = () => {
  
    const { formulario, email, password, onChange } = useForm({
      email: "test@gamil.com",
      password: "asd123",
    });

    return (
      <>
        <h3>Formulario</h3>
        <form>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => onChange(e.target.value, "email")}
          />
          <input
            type="text"
            placeholder="password"
            className="form-control mt-2 mb-2"
            value={password}
            onChange={(e) => onChange(e.target.value, "password")}
          />
          <code>
            <pre>{JSON.stringify(formulario, null, 2)}</pre>
          </code>
        </form>
      </>
    );
}
