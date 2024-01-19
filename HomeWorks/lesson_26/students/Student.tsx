import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '../../store';
import StudentEdit from './StudentEdit';

export default function Students(): JSX.Element {
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();

  const handleDelete = (id: string): void => {
    dispatch({ type: 'students/delete', payload: id });
  };

  return (
    <div>
      <h1>Студенты</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>{student.name}</p>
            <StudentEdit id={student.id} />
            <p>{student.major}, {student.enrollmentDate}</p>
            <DeleteIcon onClick={() => handleDelete(student.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
