export const NoteSchema = {
    name : 'Note',
    properties : {
        id : 'int',
        note : 'string',
        date : 'string'
    }, primaryKey : 'id'
}

export const User = {
    name : 'User',
    properties : {
        id : 'int',
        name : 'string',
        email : 'string',
        password : 'string'
    }, primaryKey : 'id'
}