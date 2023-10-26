import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';

const firebaseConfig = {
   apiKey: import.meta.env.FIREBASE_API_KEY,
   authDomain: 'e-commerce-e3063.firebaseapp.com',
   projectId: 'e-commerce-e3063',
   storageBucket: 'e-commerce-e3063.appspot.com',
   messagingSenderId: '370360468278',
   appId: '1:370360468278:web:c8ab2f6e6573b4f066a997',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// upload images
export const useHandleFileUpload = (setUploadedImgArr) => {
   const [err, setErr] = useState(false);
   const [filePerc, setFilePerc] = useState(0);

   const handleFileUpload = (file) => {
      const storage = getStorage(firebaseApp);
      const fileName = file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
         'state_changed',
         (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePerc(Math.round(progress));
         },
         (error) => {
            setErr(true);
         },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               setUploadedImgArr((prev) => [...prev, downloadURL]);
            });
         }
      );
   };

   return { handleFileUpload, filePerc, err };
};
