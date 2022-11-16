
const SWAPI_ROOT = 'https://www.swapi.tech/api/';
const SWAPI_PEOPLE = 'people';

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

(async() => {
    let people = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
    console.log(people)
})()