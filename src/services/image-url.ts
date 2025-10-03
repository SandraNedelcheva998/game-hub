const getCroppedImageUrl=(url:string)=>{
    if(!url) return;

    //TODO: fix error tuka zosto ne site igri imaat slika Uncaught TypeError: Cannot read properties of null (reading 'indexOf')
    const target="media/"
    const index=url.indexOf(target)+target.length;
    return url.slice(0,index)+'crop/600/400/'+url.slice(index)

}

export default getCroppedImageUrl