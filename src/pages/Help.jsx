
import { Link, Outlet } from 'react-router-dom'

export default function Help() {
  return (
    <div className="container">
        <h1 className="text-2xl text-teal-500 mb-10 mt-10">Help</h1>
        <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae quasi harum asperiores sequi nisi ducimus quas. Officiis pariatur nisi, vero et vel deserunt sint atque ex, quam cumque debitis.
        </p>
            <div className="flex gap-3">
            <Link className='underline' to="contact">Contact </Link>
            <Link className="underline " to="faq">Faq</Link>
            </div>
        <Outlet />
    </div>
  )
}
