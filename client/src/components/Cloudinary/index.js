import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../utils/cloudinaryService";

function ProfileImage() {
  const [image, setImages] = useState([])

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dgirhzjvq",
      tags: [tag, 'profileImage'],
      uploadPreset: "snippit"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          setImages([...image, photos.info.public_id])
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])

  return (
   <CloudinaryContext cloudName="dgirhzjvq">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
      <section>
        {image.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)};
      </section>
    </div>
   </CloudinaryContext>
  );
};

export default ProfileImage;