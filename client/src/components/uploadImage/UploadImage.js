import './styles.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFile } from '../../redux/uploadFiles';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const UploadImage = (props) => {

    //imageKIt URLS and keys
    const publicKey = 'public_id0Y6bD/FhF9HuAO5owFSKY1lWU='; 
    const authenticationEndpoint = 'http://localhost:3001/auth';
    const urlEndpoint = 'https://ik.imagekit.io/7mt7kit6w';
    const onError = err => {
    console.log("Error", err);
    };

    const onSuccess = res => {
    console.log("Success", res);
    };
    //

    const [files, setFiles] = useState([]);
    const hiddenFileInput = useRef(null);
    const dispatch = useDispatch();
  
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        console.log(event.target.files)
        const filesToUpload = event.target.files;
        console.log(filesToUpload)
        setFiles(filesToUpload);
        
    };


    return (
        <div className="upload-image d-flex align-items-center">
            <div className="row flex-grow-1">
                <div className="col-lg-6 ps-5 text-start">
                    <p className="heading">DROP ME</p>
                    <p>drag and drop files to upload</p>
                </div>
                <div className="col-lg-6">
                    <IKContext
                        urlEndpoint={urlEndpoint}
                        publicKey={publicKey}
                        authenticationEndpoint={authenticationEndpoint}
                    >
                        <IKUpload
                        fileName="test-upload.png"
                        onError={onError}
                        onSuccess={onSuccess}
                        // style={{display: 'none'}}
                        >
                            {/* <Button colorScheme='blue'
                                onClick={handleClick}
                            >
                                Upload a file
                            </Button> */}
                        </IKUpload>
                
                        
                        {/* <input multiple
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            
                            style={{display: 'none'}} 
                        /> */}
                </IKContext>
                </div>
            </div>

        </div>
    )
};
export default UploadImage;