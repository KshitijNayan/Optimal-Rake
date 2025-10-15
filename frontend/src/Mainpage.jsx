import Placeholder from './components/Placeholder';
import { motion } from "motion/react"
import MainLogo from './components/MainPageLogo';
import SideScroll from './components/SideScroll';
import Pagination from './components/Pagination';

export default function Mainpage() {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.6 },
            }}><MainLogo image="/SAIL Mainpage.png"/></motion.div>
            <Pagination/>
            <div className='container my-3'>
                <SideScroll />
            </div>
            <Placeholder />
        </>
    )
}