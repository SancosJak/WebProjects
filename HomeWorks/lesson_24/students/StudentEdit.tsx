import React, { FormEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
}

export default function StudentEdit(props: Props): JSX.Element {
  const { id } = props;
  const [name, setName] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch();

  function handleEdit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch({ type: 'students/editName', payload: { id, newName: name } });
    setToggle(!toggle);
    setName('');
  }

  return (
    <div>
      <EditIcon onClick={() => { setToggle(!toggle); }} />
      {toggle &&
        (
          <form onSubmit={handleEdit}>
            <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Сохранить</button>
          </form>
        )}
    </div>
  );
}
