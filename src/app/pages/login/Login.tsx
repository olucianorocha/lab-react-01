import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const emailLength = useMemo(() => {
        // console.log('executou')
        return email.length * 1000;
    }, [email.length]);

    // useEffect(() => {
    //     if (window.confirm('você é homem?')) {
    //         console.log('Homem')
    //     } else {
    //         console.log('Mulher')
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log(email)
    // }, [email]);

    // useEffect(() => {
    //     console.log(password)
    // }, [password]);

    // const handleEntrar = () => {
    //     console.log(email)
    //     console.log(password)
    // }

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email, password]);



    return (
        <div>
            <form>
                <p>seu e-mail tem {emailLength} caracteres.</p>

                <label>
                    <span>E-mail</span>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />

                </label>

                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        value={password}
                        ref={inputPasswordRef}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>


            </form>

        </div>

    )

}