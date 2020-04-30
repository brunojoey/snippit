import React from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

function Cloudinary() {
    return (
        <div>
            <Image cloudName="dgirhzjvq" publicId="sample" width="300" crop="scale" />
        </div>
    )

};

export default Cloudinary;