import { motion } from "motion/react"

export default function SideScroll() {

    return (
        <div className="row">
            <div className="col-3" >
                <div id="simple-list-example" className="d-flex flex-column gap-3 simple-list-example-scrollspy text-center" >
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-1" style={{color: 'rgb(253, 253, 253)', textDecoration:'none', display: 'block' }}>About us</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px', textAlign:'center' }}><a className="rounded shadow-lg p-2" href="#simple-list-item-2" style={{color: 'rgb(253, 253, 253)', textDecoration:'none', display: 'block' }}>Our Mission</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-3" style={{color: 'rgb(253, 253, 253)', textDecoration:'none',display: 'block' }}>Vision</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-4" style={{color: 'rgb(253, 253, 253)', textDecoration:'none', display: 'block' }}>Why choose Revoltt?</a></motion.div>
                </div>
            </div>
            <div className="col-9">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example shadow-lg p-2" tabIndex="0">
                    <h4 id="simple-list-item-1" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>About us</h4>
                    <p style={{ color: 'rgb(85, 196, 204)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px', maxHeight:'500px', overflowY:'auto' }}>
                        Write something
                        <br></br> <br></br>
                        "Those who cannot remember the past are condemned to repeat it." – George Santayana
                    </p>
                    <h4 id="simple-list-item-2" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Our Mission</h4>
                    <p style={{ color: 'rgb(85, 196, 204)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        We are committed to:
                        <br></br> <br></br>
                        Write something
                    </p>
                    <h4 id="simple-list-item-3" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Vision</h4>
                    <p style={{ color: 'rgb(85, 196, 204)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        We envision a future where
                        <br></br>
                        Write something
                    </p>
                    <h4 id="simple-list-item-4" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Why choose Revoltt?</h4>
                    <p style={{ color: 'rgb(85, 196, 204)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        What SAIL does
                        <br></br> <br></br>
                        You’re preparing for a breakthrough.
                        Write something
                    </p>
                </div>
            </div>
        </div>
    )
}