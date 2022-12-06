export const getLocalStorageData = (key) => {
    const getData = localStorage.getItem(key)
    if(getData !== null){
        return JSON.parse(getData)
    }
    return {}
}

export const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}