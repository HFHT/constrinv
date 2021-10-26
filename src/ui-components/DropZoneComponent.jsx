import { useCallback, useEffect, useMemo, useState } from 'react';
import { useUpdateDBMutation } from '../services/rtkquery/MongoDB';
import { useDropzone } from 'react-dropzone';
import { ImageUpload } from '../services/ImageUpload';
import { TonalitySharp } from '@mui/icons-material';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  backgroundColor: 'darkgreen',
  background: 'repeating-linear-gradient(45deg,#bbfac9,#bbfac9 10px,#7ff899 10px,#7ff899 20px)'
};

const rejectStyle = {
  backgroundColor: 'darkred',
  background: 'repeating-linear-gradient(45deg,#faa4a4,#faa4a4 10px,#f87f7f 10px,#f87f7f 20px)'

};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);
  const [updateDB, { isLoading: isUpdating }] = useUpdateDBMutation()

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      ImageUpload(file)
      console.log('onDrop:', file.name)
      updateDB(
        {
          method: 'updateOne',
          db: 'Inventory',
          collection: 'Items',
          find: { "_id": 24 },
          data: { "invPhotos[0].img": file.name }
        },
        { pollingInterval: process.env.REACT_APP_DBPOLLTIME }
      )
    })
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your image here.</div>
      </div>
      <aside>
        {thumbs}
      </aside>
    </section>
  )
}

export default DropzoneComponent;