export function validateEmployee(employee) {


    //id and phone are unique
    if(localStorage.getItem(`Employee ${employee.id}`) !== null) {
        return false
    }

    //validate phone?

    //id cant be changed --> will be treated in frontend (field will be disabled)
    //all fields are required --> wil be treated in frontend (save button only enabled when all fields exists)

}