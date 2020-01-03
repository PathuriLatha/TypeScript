//Partial<>
interface TodoPartial {
  title: string;
description: string;
}
function updateTodo(todo: TodoPartial, fieldsToUpdate: Partial<TodoPartial>) {
    return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
    title: 'Partial desk',
    description: 'clear partial',
};
const todo2 = updateTodo(todo1, {
    description: 'updatedTodo Partial',
});
console.log(todo1);
console.log(todo2);

//Readonly<>
interface TodoReadOnly {
    title: string;
}
const todoReadOnly: Readonly<TodoReadOnly> = {
    title: 'Delete inactive users',
};
//todoReadOnly.title = 'Hello';
console.log(todoReadOnly.title);

//Record<>
class PageInfoRecord {
    title: string;
}
type PageRecord = 'home' | 'about' | 'contact';
const x: Record<PageRecord, PageInfoRecord> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
console.log(x);

// Pick<>
interface TodoPick {
    title: string;
    description: string;
    completed: boolean;
}
type TodoPreviewPick = Pick<TodoPick, 'title' | 'completed'>;
const todoPick: TodoPreviewPick = {
    title: 'Clean room from pick',
    completed: false,
};
console.log(todoPick);

//Omit<T, U> this is getting compilation error bcz of typescript version
/*
interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
}
type TodoPreviewOmit = Omit<TodoOmit, 'description'>;
const todoOmit: TodoPreviewOmit = {
    title: 'Clean room',
    completed: false,
};
console.log(todoOmit);
*/

//Exclude<>
type exclude1 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type exclude2 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type exclude3 = Exclude<string | number | (() => void), Function>;//  string | number
//exclude1;

//Extract<>
type extract1 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type extract2 = Extract<string | number | (() => void), Function>; // () => void
//extract1;

//NonNullable<>
type nonNullable1 = NonNullable<string | number | undefined>;  // string | number
type nonNullable2 = NonNullable<string[] | null | undefined>;  // string[]
//nonNullable1;
