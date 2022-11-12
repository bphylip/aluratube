import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


//Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    }
}
//

const PROJECT_URL = "https://elrhpherajkxlwxkuulr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVscmhwaGVyYWpreGx3eGt1dWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTA0OTcsImV4cCI6MTk4Mzc4NjQ5N30.bqH1QFk_0l1SQb1uVoRcplvBbTsFIFtYU7ucrsf49Kk"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export default function RegisterVideo() {

    const formCadastro = useForm({
        initialValues: { titulo: "Frostpunk - Neve e Steak tartare", url: "https://img.youtube.com/vi/O8jtAyPuhNg/hqdefault.jpg" }
    })
    const [formVisivel, setFormVisivel] = React.useState(false);



    return (

        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>

            {formVisivel
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(formCadastro.values);

                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "jogos",
                        })
                        .then((oq)=>{
                            console.log(oq)
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>


                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>

                            <input
                                placeholder="Titulo do video"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />

                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />

                            <button type="submit">
                                Cadastrar
                            </button>

                        </div>
                    </form>
                ) : false
            }

        </StyledRegisterVideo>
    )
}