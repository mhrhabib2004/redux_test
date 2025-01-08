export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string | Date;
    isCompleted: boolean;
    priority: "Low" | "Medium" | "High";
}