import Realm from 'realm'
import {NoteSchema} from './NoteSchema'
import { User } from './NoteSchema';

const realm = new Realm({
    schema : [NoteSchema]
});

export default realm;