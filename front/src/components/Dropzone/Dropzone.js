import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Dropzone.css";

function Dropzone() {
            console.log(acceptedFile);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
        multiple: false,
        maxSize: 10485760,
        accept:"image/*",
    })

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the file here ...</p> :
                    <p>Drag 'n' drop image here, or click to select file</p>
            }
        </div>
    )
}

export default Dropzone;