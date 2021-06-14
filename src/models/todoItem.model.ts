// what a Todo item should look like
export default interface todoItem {
	id: string;
	completed: Boolean;
	todo: string;
}

export type modifier = "All" | "Active" | "Completed";
