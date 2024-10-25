import './Footer.css'
import { LiaCcVisa } from "react-icons/lia";
import { LiaCcMastercard } from "react-icons/lia";

export function Footer () {

  return (
    <footer className='footer'>
      <h5>LibroHub</h5>
      <LiaCcVisa size={30}/>
      <LiaCcMastercard size={30}/>
    </footer>
  )
}
