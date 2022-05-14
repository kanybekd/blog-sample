export const nameCapitalize = (string) => {
    // emirhan cakir

    const splitted = string.split(" ") //["emirhan","cakir"]
    const afterMapping = splitted.map(i => i.slice(0, 1).toUpperCase() + i.slice(1)) //["Emirhan","Cakir"]
    return afterMapping.join(" ") // Emirhan Cakir

}