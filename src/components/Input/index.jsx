import { useFormContext, Controller } from "react-hook-form";

export function Input({ name, type, placeholder }) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<input type={type} placeholder={placeholder} {...field} />
			)}
		/>
	);
}
