import React from "react";

import { useForm } from 'react-hook-form';

function Registreerpagina() {
    const { handleSubmit, register } = useForm();

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="details-gebruikersnaam">
                Gebruikersnaam:
                <input
                    type="text"
                    name="gebruikersnaam"
                    id="details-gebruikersnaam"
                    {...register("gebruikersnaam")}
                />
            </label> <br/>
            <label htmlFor="details-email">
                Email:
                <input
                    type="text"
                    name="email"
                    id="details-email"
                    {...register("email")}
                />
            </label> <br/>
            <label htmlFor="details-wachtwoord">
                Wachtwoord:
                <input
                    type="text"
                    name="wachtwoord"
                    id="details-wachtwoord"
                    {...register("wachtwoord")}
                />
            </label> <br/>
            <button type="submit">
               Versturen
            </button>
        </form>
    )

}

export default Registreerpagina;

