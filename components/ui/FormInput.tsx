import type { Ref } from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  tabIndex?: number;
  inputRef: Ref<HTMLInputElement>;
}

export default function FormInput({ type, placeholder, required, inputRef, tabIndex }: FormInputProps) {
  return (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      required={required}
      tabIndex={tabIndex}
      className="block w-full bg-transparent border-none border-b border-b-[rgba(255,255,255,0.10)] text-[#e8e8e8] font-[var(--font-garamond)] text-[1.05rem] tracking-[0.04em] py-[0.7rem] mb-[1.4rem] outline-none transition-colors duration-200 focus:border-b-[rgba(255,255,255,0.60)]"
    />
  );
}
