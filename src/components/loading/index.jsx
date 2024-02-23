import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  return (
    <div className='h-screen w-full grid place-items-center'>
         <PuffLoader color='rgb(67, 130, 45)' size={50}/>
    </div>
  )
}

export default Loading