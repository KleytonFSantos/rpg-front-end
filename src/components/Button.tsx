interface ButtonProps {
  className: string;
  buttonText: string;
}

function Button({ className, buttonText }: ButtonProps) {
  return (
    <div className="flex w-full">
      <button
        type="submit"
        className={className}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
