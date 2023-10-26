import { useEffect, useState } from 'react';
import { checkIcon, closeIcon, falseIcon } from '../../../utils/icons';
import Input from '../../../ui/Input';
import Image from '../../../ui/Image';
import Button from '../../../ui/Button';
import { useHandleFileUpload } from '../../../utils/firebase';

function UploadFile({ uploadedImgArr, setUploadedImgArr }) {
   const [file, setFile] = useState(false);
   const { handleFileUpload, filePerc, err } = useHandleFileUpload(setUploadedImgArr);

   const removeImg = (e, link) => {
      e.preventDefault();

      setUploadedImgArr((prev) => prev.filter((img) => img !== link));
   };

   //    upload img
   useEffect(() => {
      if (file) handleFileUpload(file);

      return () => setFile(false);
   }, [file]);

   return (
      <>
         <span>Browse images to upload:</span>
         <Input
            type='file'
            id='upload'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
            variant='upload'
         />
         {filePerc > 0 && filePerc < 100 ? (
            <span className='mx-auto border border-primaryGrey bg-primaryGrey rounded-md'>
               Uploading file {filePerc}%
            </span>
         ) : filePerc === 100 ? (
            !uploadedImgArr.length ? (
               ''
            ) : (
               uploadedImgArr.map((link) => (
                  <div
                     key={link}
                     className='flex items-center bg-primaryGrey/30 border border-primaryGrey rounded-md p-2 relative'
                  >
                     <div className='w-16 h-16 flex items-center mr-4'>
                        <Image src={link} variant='primary' />
                     </div>
                     <span>File uploaded {checkIcon}</span>
                     <Button customClass='absolute top-2 right-2' variant='rounded' onClick={(e) => removeImg(e, link)}>
                        {closeIcon}
                     </Button>
                  </div>
               ))
            )
         ) : (
            ''
         )}
         {err && (
            <span className='mx-auto border border-primaryGrey bg-primaryGrey p-2 rounded-md'>
               Couldn&apos;t upload image {falseIcon}
            </span>
         )}
      </>
   );
}

export default UploadFile;
