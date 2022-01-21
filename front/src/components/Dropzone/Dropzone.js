import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Dropzone.css";
import {useSelector} from "react-redux";
import axios from "axios";

function Dropzone({close}) {
    const storage = getStorage();
    const collection = useSelector((state)=>state.collection.collection);
    const storageRef = ref(storage, `collection-logo-${collection.id}`);
    const onDrop = useCallback(acceptedFile => {
        if(acceptedFile.length){
            uploadBytes(storageRef, acceptedFile.shift()).then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.metadata.fullPath)).then(ref => {
                    axios.put(`${process.env.REACT_APP_PATH}/api/collections/${collection.id}`,{
                        picture: ref,
                    })
                        .then(r => {
                            close();
                        })
                })

            });
        }
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