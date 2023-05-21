function findDuplicates(arr){
    const duplicates = []; //array vazia para armazenar os duplicados
    const seen = new Set(arr); //set para armazenar os valores únicos da array

    for(item of seen){
        //se o número de ocorrências do item na array for maior que 1, então ele é duplicado
        if(arr.filter((itemArray)=> itemArray ===item). length>1){
            duplicates.push(item)
        }
    }
    return duplicates
}
    
console.log(findDuplicates([1,2,3,1,2,3]))  
module.exports = findDuplicates;