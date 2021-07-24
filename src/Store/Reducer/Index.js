const initialState = {
    products:''
}

const reducer=(state=initialState ,action)=>{
   
    switch(action.type){
        case "SEND_PRODUCT":
            return{
               products:action.data
            }
        case "SEND_INFORMATION":
            return{
                products:action.id
            }
            default:
                return state
    }

}

export default reducer;