interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition duration-200";
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}