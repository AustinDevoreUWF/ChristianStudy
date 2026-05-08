import { CSSProperties } from "react";

const inputStyle: CSSProperties = {
  display: "block",
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
  color: "#e8e8e8",
  fontFamily: "var(--font-garamond)",
  fontSize: "1.05rem",
  letterSpacing: "0.04em",
  padding: "0.7rem 0",
  marginBottom: "1.4rem",
  outline: "none",
};

interface FormInputProps{
    type:string;
    placeholder:string;
    required:boolean;
    tabIndex:number;
    inputRef:React.Ref<HTMLInputElement>;
}

export default function FormInput({type,placeholder,required,inputRef,tabIndex}:FormInputProps){
    return (
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          required={required}
          tabIndex={tabIndex}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
          onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
        />
    )
}