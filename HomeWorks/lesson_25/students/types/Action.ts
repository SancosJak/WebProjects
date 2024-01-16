import StudentCredentials from '../types/StudentCredential';

type Action =
  | { type: 'students/add', payload: StudentCredentials }
  | { type: 'students/delete', payload: string }
  | { type: 'students/editName', payload: { id: string, newName: string } };

export default Action;