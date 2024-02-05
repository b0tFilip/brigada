import React, { useState } from "react";

function Introduction() {
    const [firstName, setFirstName] = useState("jméno");
    const [surname, setSurname] = useState("příjmení");
    const [age, setAge] = useState("x");

    function changeName(inputField: any) {
        setFirstName(inputField.target.value);
    }

    function changeSurname(inputField: any) {
        setSurname(inputField.target.value);
    }

    function changeAge(inputField: any) {
        setAge(inputField.target.value);
    }

    return (
        <div>
            <h1> Řekni mi něco o sobě!</h1>
            <form
                style={{
                    background: "var(--lightBg)",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "50%",
                }}
            >
                <div>
                    <p style={{ margin: 0 }}>Jméno</p>
                    <input value={firstName} onChange={changeName} />
                </div>
                <div>
                    <p style={{ margin: 0 }}> Příjmení </p>
                    <input value={surname} onChange={changeSurname} />
                </div>
                <div>
                    <p style={{ margin: 0 }}> Věk</p>
                    <input value={age} type="number" onChange={changeAge} />
                </div>
            </form>
            <p style={{ color: "whitesmoke" }}>
                {" "}
                Jmenuješ se {firstName} {surname} a jsi starý {age}let
            </p>
        </div>
    );
}

export default Introduction;
