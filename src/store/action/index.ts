interface Actions {
    type:string
}

export const increment = ():Actions=>{
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ():Actions=>{
    return {
        type: 'DECREMENT'
    }
}