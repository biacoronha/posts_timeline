//remove this??
export default class Employee {
    
    id;
    username;
    phone;
    role;
    name;

    constructor(id, username, phone, role, name) {
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.role = role;
        this.name = name;
    }

    setUsername(username){
        this.username = username
    }

    setPhone(phone){
        this.phone = phone
    }

    setRole(role){
        this.role = role
    }

    setName(name){
        this.name = name
    }

}