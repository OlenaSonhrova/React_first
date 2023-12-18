
export const InputForNewTodo = () => {
	const inputs = <>
		<label>Name todo:
			<input placeholder='name todo' />
		</label>
		<label>About todo:
			<input placeholder='about todo' />
		</label>
	</>

	return (
		<>
			<div>{inputs}</div>
		</>
	);
};