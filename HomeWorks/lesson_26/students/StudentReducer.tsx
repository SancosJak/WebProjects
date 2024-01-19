import { uid } from 'uid';
import Action from './types/Action';
import Student from './types/Student';

type StudentsState = Student[];

const initialState: StudentsState = [
  {
    id: uid(),
    name: 'Student Studentov',
    age: 20,
    major: 'Computer Science',
    enrollmentDate: '2022-01-01',
  },
];

export default function studentsReducer(
  state: StudentsState = initialState,
  action: Action
): StudentsState {
  switch (action.type) {
    case 'students/add':
      return [...state, { ...action.payload, id: uid() }];
    case 'students/delete':
      return state.filter((student) => student.id !== action.payload);
    case 'students/editName':
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, name: action.payload.newName }
          : student
      );
    default:
      return state;
  }
}
