import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Dropzone() {
            console.log(acceptedFile);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
        multiple: false,
        maxSize: 10485760,
        accept:"image/*",
    })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default Dropzone;