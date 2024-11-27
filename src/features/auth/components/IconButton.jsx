
const IconButton = ({icon,className ,children,...props}) => {
    return (
        <button
            className={`
        inline-flex items-center justify-center
        px-3 py-2 rounded
        border border-paraTertiary
        text-sm font-medium
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paraTertiary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className || ''}
      `}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    )
}
export default IconButton
