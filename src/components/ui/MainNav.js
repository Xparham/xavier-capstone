import{Link} from 'react-router-dom'
export const MainNav =() => (
    <div className="bg-gray-600 py-6 flex justify-between">
        <div>
            <h1 className="px-10 text-4xl text-white">Stork</h1>
        </div>
        <ul className="flex space-x-8 text-white px-10">
            <li><Link to="/">Home</Link></li>
            <li>(AVATAR)</li>
            <li><Link to="/contact-us"><strong>Contact Us</strong></Link></li>
        </ul>
    </div>
)