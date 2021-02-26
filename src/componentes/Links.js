import react, { useEffect, useState } from 'react';

import { db } from '../firebase';


import LinkForm from './LinkForm';

const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEditLink = async (linkObject) => {
        //console.log(linkObject);
        await db.collection('links').doc().set(linkObject);
        console.log('Nuevo link agregado');
    }

    const onDelete = async (id) => {

        if (window.confirm('Esta seguro de eliminar la informacion?')) {
          await  db.collection('links').doc(id).delete();
          console.log('Dato eliminado correctamente');
        }


    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {

            const docs = [];
            querySnapshot.forEach(doc => {
                //console.log(doc.data());
                docs.push({ ...doc.data(), id: doc.id });
            })
            setLinks(docs);
        });

    }

    useEffect(() => {
        getLinks();
    }, []);


    return (
        <div>
            <div className="col-md-4 p-2">
                <LinkForm addOrEditLink={addOrEditLink} />
            </div>



            <div className="col-md-8 p-2">

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>URL</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>

                        {links.map(link => (

                            <tbody key={link.id}>
                                <tr>
                                    <td>{link.nombre}</td>
                                    <td>{link.descripcion}</td>
                                    <td><a href={link.url} target="_blank">Ir a..</a></td>
                                    <td><i className="material-icons text-danger"
                                        onClick={() => onDelete(link.id)}>close</i></td>
                                </tr>
                            </tbody>
                        ))}


                    </table>
                </div>
            </div>
        </div>

    )
};

export default Links;