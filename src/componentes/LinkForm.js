import react, { useState } from 'react';

const LinkForm = (props) => {

    const initialStetaValues = {
        url: '',
        nombre: '',
        descripcion: ''
    };

    const [values, setValues] = useState(initialStetaValues);

    const cambioInput = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
        setValues({ ...values, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values);
        props.addOrEditLink(values);
        setValues({ ...initialStetaValues });
    }

    return (

        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control"
                    placeholder="https://url.com" name="url"
                    onChange={cambioInput} value={values.url} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" className="form-control"
                    placeholder="Nombre de la página" name="nombre" onChange={cambioInput} value={values.nombre} />
            </div>

            <div className="form-group">
                <textarea name="descripcion" rows="3" className="form-control"
                    placeholder="Escribe una descripcion" onChange={cambioInput} value={values.descripcion} />
            </div>

            <button className="btn btn-primary btn-block">
                Guardar
            </button>
        </form>
    )
};

export default LinkForm;