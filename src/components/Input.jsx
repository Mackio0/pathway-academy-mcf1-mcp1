

const Input = ({className,label, error, ...props}) => {
    return (
        <div>
            <label className={"mb-0.5 text-headingPrimary text-sm"}>{label}</label>
            <input
                className={`
                            flex h-10 w-full rounded-md border border-paraTertiary bg-background px-3 py-2 text-sm 
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                            ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
                            ${className || ''}
      `}
                {...props}
            />
        </div>
    )
}
export default Input
