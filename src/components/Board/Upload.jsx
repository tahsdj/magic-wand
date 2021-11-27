import React, { useRef, useState } from 'react'



const Upload = ({
    onChange=()=>{}
}) => {

    const [imageUrl, setImageUrl] = useState('')
    const ref = useRef()

    const handleInputChange = (e)=> {
        console.log('handleInputChange')
        const maxUploadNum = 1
    
        const selectedFiles = (() => {
            const files = e.target.files || []
            return files.length > maxUploadNum ? [...files].slice(0, maxUploadNum) : [...files]
        })()
    
        e.target.value = '';
    
        const validFiles = selectedFiles.filter(file => {
          const data = new FormData();
          data.append('file', file);
          return true;
        });
    
        if (validFiles.length > maxUploadNum) {
        //   notify(t('一次最多只能傳送 5 個檔案'), [0, -64]);
        }
    
        const tempMessages = validFiles.map(file => ({
            type: file.type,
            name: file.name,
            file,
            url: URL.createObjectURL(file)
        }))

        const uploadFile = tempMessages[0]

        console.log('uploadFile: ', uploadFile)
        setImageUrl(uploadFile.url)
        onChange(uploadFile.url)
      };

    return (
        <div className="flex w-full h-full items-center justify-center cursor-pointer">
            <input
                className="hidden"
                type="file"
                multiple
                accept={"image/jpeg,image/png,image/gif"}
                ref={ref}
                onChange={handleInputChange}
                />
            {imageUrl ? (
                <div 
                    className="w-full h-full bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                    onClick={()=>{
                        
                        if (ref.current) ref.current.click()
                    }}
                />
            ): (
                <div 
                    className="bg-white px-3 px-2" 
                    onClick={()=>{
                        if (ref.current) ref.current.click()
                    }}
                >
                    上傳魔杖
                </div>
            )}
        </div>
    )
}

export default Upload