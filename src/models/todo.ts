export interface Todo {
    id: number;
    title: string;
    description: string;
    subTasks: Todo[] | null;
    creationDate?: string;
}

