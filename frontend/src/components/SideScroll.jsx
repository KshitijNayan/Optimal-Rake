import { motion } from "motion/react"

export default function SideScroll() {

    return (
        <div className="row">
            <div className="col-3" >
                <div id="simple-list-example" className="d-flex flex-column gap-3 simple-list-example-scrollspy text-center" >
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(210, 145, 145, 0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-1" style={{color: 'rgba(129, 30, 30, 1)', textDecoration:'none', display: 'block' }}>About us</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(210, 145, 145, 0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px', textAlign:'center' }}><a className="rounded shadow-lg p-2" href="#simple-list-item-2" style={{color: 'rgba(129, 30, 30, 1)', textDecoration:'none', display: 'block' }}>Our Mission</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(210, 145, 145, 0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-3" style={{color: 'rgba(129, 30, 30, 1)', textDecoration:'none',display: 'block' }}>Vision</a></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(210, 145, 145, 0.2),rgba(0,0,0,0.2))', backgroundSize: '10px', borderRadius:'4px', padding:'5px'}}><a className="rounded shadow-lg p-2" href="#simple-list-item-4" style={{color: 'rgba(129, 30, 30, 1)', textDecoration:'none', display: 'block' }}>Why choose Revoltt?</a></motion.div>
                </div>
            </div>
            <div className="col-9">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example shadow-lg p-2" tabIndex="0">
                    <h4 id="simple-list-item-1" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>About us</h4>
                    <p style={{ color: 'rgba(12, 39, 101, 1)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px', maxHeight:'500px', overflowY:'auto' }}>
                        We are a team of engineers and data enthusiasts working on building an AI-powered logistics decision support system for large-scale industrial operations.
Our goal is to revolutionize the rake formation and dispatch planning process in industries like steel, mining, and cement — reducing manual coordination, optimizing resource utilization, and minimizing logistics costs.
                        <br></br> <br></br>
                        "Those who cannot remember the past are condemned to repeat it." – George Santayana
                    </p>
                    <h4 id="simple-list-item-2" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Our Mission</h4>
                    <p style={{ color: 'rgba(12, 39, 101, 1)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        Our mission is to redefine industrial logistics by building an intelligent, data-driven decision support system that optimizes rake formation, dispatch planning, and resource allocation.
                        <br></br> <br></br>
                        We aim to reduce logistics costs, improve rake utilization, and eliminate manual inefficiencies in large-scale operations by leveraging AI, optimization algorithms, and real-time analytics.

Through Optimal Rake, we seek to empower planners and logistics managers with actionable insights, automation, and transparency across the entire rail and road transportation value chain.
                    </p>
                    <h4 id="simple-list-item-3" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Vision</h4>
                    <p style={{ color: 'rgba(12, 39, 101, 1)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        Our vision is to create a future-ready logistics ecosystem where AI and automation drive every decision — from stockyard material movement to final dispatch — ensuring zero idle freight, zero delays, and
                        <br></br>
                        We envision Optimal Rake as a core enabler of Industry 4.0 transformation in steel, cement, and mining sectors, helping industries achieve sustainable, cost-effective, and intelligent logistics operations.
                    </p>
                    <h4 id="simple-list-item-4" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>Why choose Revoltt?</h4>
                    <p style={{ color: 'rgba(12, 39, 101, 1)', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', overflowY:'auto' }}>
                        What SAIL does?
                        <br></br> <br></br>
                        Steel Authority of India Limited (SAIL) is one of India’s largest state-owned steel producers and a Maharatna public sector enterprise under the Ministry of Steel, Government of India.
With integrated steel plants at Bhilai, Rourkela, Durgapur, Bokaro, and Burnpur, and special steel units at Salem and Bhadravati, SAIL plays a key role in building the nation’s infrastructure.

Through its continuous focus on innovation, digital transformation, and operational excellence, SAIL aims to enhance productivity, sustainability, and logistics efficiency across its supply chain.
                    </p>
                </div>
            </div>
        </div>
    )
}