import { useState } from 'react';

const useForm = <T extends Object>(fields: T) => {
	const [form, setForm] = useState(fields);

	const onChange = <K extends Object>(value: K, field: keyof T) => {
		setForm({
			...form,
			[field]: value,
		});
	};

	return { onChange, fields: form, ...form };
};

export default useForm;
