import {React} from 'react'
import Image from 'next/image'

const smallbutton = ({image, alt, imageWidth, imageHeight}) => {
    return(
            <button className='smallButtonButton'>
                <div className='smallButton'>
                    <Image className='smallButtonImg' src={image} alt={alt} width={imageWidth} height={imageHeight}/> 
                </div>
            </button>
    )
}


export default smallbutton;