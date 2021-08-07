const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300${
        className ? ` ${className}` : ''
      }`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
