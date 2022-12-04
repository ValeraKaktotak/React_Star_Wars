export const getLocalStorageData = (key) => {
    const getData = localStorage.getItem(key)
    if(getData !== null){
        return JSON.parse(getData)
    }
    return {}
}

export const setLocalStorageData = (key, data) => {
    const setData = localStorage.setItem(key, JSON.stringify(data))
}