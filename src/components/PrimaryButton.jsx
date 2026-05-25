export default function PrimaryButton({ children, onClick, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-12 px-6 bg-primary text-white font-mono text-sm font-semibold tracking-wider uppercase rounded-sm border border-primary transition-all duration-200 ease-in-out hover:bg-primary-hover hover:border-primary-hover active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 select-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
