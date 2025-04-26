import React, { useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { db } from '../../configs/index.js';
import { CarImage } from '../../configs/schema.js';
import { eq } from 'drizzle-orm';



function UploadImage({triggerUploadImage , editCarInfo, mode}) {

  const [selectImage, setSelectImage] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [existingImage, setExistingImage] = useState([]);

  useEffect(()=>{
     if (mode=='edit') {
      setExistingImage([]);
      editCarInfo?.images.forEach((image)=>{
        setExistingImage(prev=>[...prev,image?.imageUrl])
        console.log("iamge of db",image);
        
      })
     }
  },[mode, editCarInfo])

  useEffect(() => {
    if (triggerUploadImage) {
        uploadImages();
    }
  },[triggerUploadImage])

  const cloudName = import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME;
  const apiUrl = import.meta.env.VITE_APP_CLOUDINARY_CLOUD_API; 


  const uploadToCloudinary = async (file, index) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'carImage');
    data.append('cloud_name', cloudName);

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        body: data,
      });

      const upload = await res.json();
      
      await db.insert(CarImage).values({
        imageUrl:upload.url,
        carListingId:triggerUploadImage

    })
      
      console.log(`Uploaded file ${index + 1}:`, upload.url); 
    } catch (error) {
      console.error(`File ${index + 1} upload failed:`, error);
    }
  };

  const onFileSelected = async (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const selectedFiles = [];
   
    for (let i = 0; i < files.length; i++) {
      const file = files[i];      
     selectedFiles.push(file)
     }
    setSelectImage((prev) => [...prev, ...selectedFiles]);
    setFilteredImages((prev) => [...prev, ...selectedFiles]);
  };

  const onImageRemove = (image) => {
    const remainingImages = selectImage.filter((item) => item!== image);
    const remainingFiltered = filteredImages.filter((item) => item !== image);
   
    setSelectImage(remainingImages);
    setFilteredImages(remainingFiltered); 

    // console.log('remainingImages',remainingImages);
    // console.log('Removed image:', remainingFiltered);
  };
  const onImageRemoveFormDb=async(image, index)=>{
    // const result=editCarInfo?.images[index]
    // console.log(result);
    const result= await db.delete(CarImage).where(eq(CarImage.id,editCarInfo?.images[index]?.id)).returning({id:CarImage.id});
    const imageList=existingImage.filter(item=>item!=image);
    setExistingImage(imageList)
    
  }

  const uploadImages = async () => {
    for (let i = 0; i < filteredImages.length; i++) {
      await uploadToCloudinary(filteredImages[i], i);
    }
   
  };


  return (
    <div>
        <h2 className='font-bold text-xl my-3'>Upload Car Image</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
             {mode=='edit' &&
              existingImage.map((image, index)=>(
                <div key={index}>
                  <TiDeleteOutline className='text-xl text-red-700'
                  onClick={()=>onImageRemoveFormDb(image,index)}
                  />
                  <img src={image} className='w-full h-[130px] object-cover rounded-xl' />
               </div>
              ))

             }
            {selectImage.map((image, index)=>(
                <div key={index}>
                    <TiDeleteOutline className='text-xl text-red-700'
                    onClick={()=>onImageRemove(image,index)}
                    />
                    <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
                </div>
            ))}
            <label htmlFor="upload-image">
                <div className='border rounded-xl border-dotted border-black bg-blue-300 p-10'>
                    <h2 className=' text-3xl text-center'>+</h2>
                </div>
            </label>
            <input type="file" multiple={true}
             id='upload-image' className='opacity-0'
             onChange={onFileSelected}
             />     
        </div>
    </div>
  )
}

export default UploadImage