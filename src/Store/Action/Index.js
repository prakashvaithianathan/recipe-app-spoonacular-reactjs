export const sendProduct =(data)=>{
    return{
        type:'SEND_PRODUCT',
        data:data
    }
}

export const sendInformation = (id)=>{
    return{
        type:'SEND_INFORMATION',
        id:id
    }
}