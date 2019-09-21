interface Actions {
    type:string
}

export const increment = ():Actions=>{
    return {
        type: 'INCREMENT'
    }
}