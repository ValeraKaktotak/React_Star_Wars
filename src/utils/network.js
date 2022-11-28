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

export const makeConcurrentRequest = async(url) => {
    const result = await Promise.all(url.map((request)=>{
        return fetch(request).then(res => res.json())
    }))
    return result
}
