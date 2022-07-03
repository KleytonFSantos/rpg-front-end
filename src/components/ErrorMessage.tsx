
interface ErrorMessageProps {
    textMessage?: string;
}

function ErrorMessage({ textMessage }: ErrorMessageProps) {
  return (
    <div className="bg-my-black opacity-90 rounded-md text-center items-center h-8 mb-6 justify-center">
        <div className="flex items-center pt-1 text-center justify-center mb-6 text-red-600 relative font-nunito">{ textMessage }</div>
    </div>    
  )
}

export default ErrorMessage