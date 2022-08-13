import './styles.css';
import Image from './image/Image';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Images = () => {
    const [files, setFiles] = useState([]);
    
    const headers = {
        Authorization: 'private_UJ6atupKbeKjL54wVVGryvEgmKA=',
        "Acces-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "Origin X-Requested-With Content-Type Accept"

    }

    const fetchFiles = async () => {
        const result =  await axios.get('https://ik.imagekit.io/7mt7kit6w/files', headers)
        console.log(result);
    }
    useEffect(() => {
        fetchFiles();
    }, [])


    return (
        <div className="images">
            <Image urlEndPoint="https://ik.imagekit.io/7mt7kit6w" />
            {

            }
        </div>
    )
}
export default Images;