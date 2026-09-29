import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  validation?: Parameters<UseFormRegister<T>>[0] extends never
    ? never
    : Parameters<UseFormRegister<T>>[1];
}

const FormInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  validation,
}: FormInputProps<T>) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#242528] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full text-lg px-6 py-3 rounded-xl border border-[#E5E6E8] focus:outline-none focus:border-blue font-normal placeholder-gray-400 transition"
      />

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
