type Action =
| { type: 'books/add', payload:
{ title: string; year: number; author: string; } }
| { type: 'books/delete', payload: string } // удаляем по id, id в нашем примере это стринг
| { type: 'books/editTitle', payload: { id: string, title: string } };
export default Action;
