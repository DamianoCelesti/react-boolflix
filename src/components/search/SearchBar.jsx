import { useContext } from "react";
import { useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const SearchBar = () => {

    const { setTitolo } = useContext(GlobalContext);
    const [titoloLocale, setTitoloLocale] = useState("");

    function gestioneInvio(e) {
        e.preventDefault();
        setTitolo(titoloLocale);
    }

    function gestioneForm(e) {
        // console.log(e.target);

        setTitoloLocale(e.target.value);
    }
    return (
        <>
            <form onSubmit={gestioneInvio}>
                <input
                    type="text"
                    name="title"
                    onChange={gestioneForm}
                    value={titoloLocale}
                    placeholder="inserire titolo"
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}



export default SearchBar