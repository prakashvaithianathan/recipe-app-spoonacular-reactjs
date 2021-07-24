import axios from 'axios'
import {API_KEY} from './key'


export const information =async(id)=>{
    try {
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`)
      
    
        return data
    
    } catch (error) {
        console.log(error);
    }
}

export const ingredients=async(id)=>{
    try {
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`)
      
    
        return data
    
    } catch (error) {
        console.log(error);
    }
}



