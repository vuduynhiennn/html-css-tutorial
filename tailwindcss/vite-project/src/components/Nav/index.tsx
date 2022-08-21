import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from 'react-icons/bi'

const items = [
  { label: 'Home', icon: <BiHomeAlt size="1.875rem" />, active: true },
  { label: 'Movies', icon: <BiMoviePlay size="1.875rem" />},
  { label: 'About', icon: <BiInfoCircle size="1.875rem" />},

]

const index = () => {
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b text-right border-primary">phimmoi.net</h4>
      </div>
      <ul className="mx-4 my-2 ">
        <li className='flex p-2 justify-end items-center cursor-pointer'>
          <h3 className='mr-2'>Home</h3>
        </li>
      </ul>
    </nav> 
  )
}

export default index