import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [verifyEmail, setVerifyEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = { name, phone, email };
        onConfirm(userData);
    };

    const handleNameChange = ({ target }) => {
        setName(target.value);
        const nameError = target.value.trim() === '' || !/^[A-Za-z]+\s[A-Za-z]+$/.test(target.value)
            ? 'Por favor, ingresa un nombre y un apellido válidos.'
            : '';
        setErrors((prevState) => ({ ...prevState, name: nameError }));
        setIsValid(nameError === '' && phone !== '' && validateEmail(email));
    };

    const handlePhoneChange = ({ target }) => {
        setPhone(target.value);
        const phoneError = target.value.trim() === '' ? 'Por favor, ingresa un número de teléfono válido.' : '';
        setErrors((prevState) => ({ ...prevState, phone: phoneError }));
        setIsValid(phoneError === '' && name !== '' && validateEmail(email));
    };

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
        const emailError = !validateEmail(target.value) ? 'Por favor, ingresa un correo electrónico válido.' : '';
        setErrors((prevState) => ({ ...prevState, email: emailError }));
        setIsValid(emailError === '' && name !== '' && phone !== '');
    };

    const handleVerifyEmailChange = ({ target }) => {
        setVerifyEmail(target.value);
        const verifyEmailError = target.value !== email ? 'Los correos electrónicos no coinciden.' : '';
        setErrors((prevState) => ({ ...prevState, verifyEmail: verifyEmailError }));
        setIsValid(verifyEmailError === '' && name !== '' && phone !== '' && validateEmail(email));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre:
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        pattern="[A-Za-z\s]+"
                        placeholder="Ej: Juan Pérez"
                    />
                    {errors.name && <span className="Error">{errors.name}</span>}
                </label>
                <label className="Label">
                    Teléfono:
                    <input
                        className="Input"
                        type="number"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Ej: 0987654321"
                    />
                    {errors.phone && <span className="Error">{errors.phone}</span>}
                </label>
                <label className="Label">
                    Email:
                    <input
                        className="Input"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Ej: correo@ejemplo.com"
                    />
                    {errors.email && <span className="Error">{errors.email}</span>}
                </label>
                <label className="Label">
                    Confirmar email:
                    <input
                        className="Input"
                        type="email"
                        value={verifyEmail}
                        onChange={handleVerifyEmailChange}
                        placeholder="Ej: correo@ejemplo.com"
                    />
                    {errors.verifyEmail && <span className="Error">{errors.verifyEmail}</span>}
                </label>
                <button className={`${"Button"} ${isValid ? "ActiveButton" : ''}`} type="submit" disabled={!isValid}>
                    Confirmar compra
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;