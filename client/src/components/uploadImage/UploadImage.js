import './styles.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFile } from '../../redux/uploadFiles';

const UploadImage = (props) => {
    const [files, setFiles] = useState([]);
    const hiddenFileInput = useRef(null);
    const filesArray = [];
    const filesValue = []

    const { filesToUpload } = useSelector(state => state.uploadFiles.filesToUpload)

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
                <Button colorScheme='blue'
                    onClick={handleClick}
                >
                    Upload a file
                </Button>
                <input multiple
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                   
                    style={{display: 'none'}} 
                />
                </div>
            </div>

        </div>
    )
};
export default UploadImage;