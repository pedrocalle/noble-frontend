interface ButtonProps {
  content: string;
  onClick?: () => void;
  variant: "white" | "black";
}

export function Button({ content, onClick, variant }: ButtonProps) {
  const baseStyle = "group border-4 text-center px-10 transition btn-text ";

  const variants = {
    white: "border-white text-white hover:bg-white hover:text-black",
    black: "border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {content}
    </button>
  );
}
