const employee = {
    name: "Sam", 
    streetAddress: "12 Broadway"
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return {...employeeObject, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    return employeeObject[key] = value
}

function deleteFromEmployeeByKey(employeeObject, _key){
    const updatedEmployeeObject = {...employeeObject}
    return delete updatedEmployeeObject.key;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, _key){
    return delete employeeObject.key;
}