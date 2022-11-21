import {HTTP, HTTPS} from '../constants/api'

/**
 * Изменяет URL с HTTP на HTTPS
 *@param {String} url - изменяемый урл
 *@returns {String} - изменнный урл
 * */
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS): url;
    return result
}

export const getApiResource = async(url) => {
    try{
        let swapiResponse = await fetch(url)
        if(!swapiResponse.ok){
            console.error('Error in fetch request: ' +swapiResponse.status)
            return false
        }
        return await swapiResponse.json()
    }catch (error){
        console.error('Error in fetch request: ' + error.message)
        return false
    }
}
