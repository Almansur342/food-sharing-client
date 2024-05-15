import rice from '../assets/rice.png'
import cloth from '../assets/tshirt.png'
import learn from '../assets/learn.png'
import healthcare from '../assets/healthcare.png'
import family from '../assets/family.png'
import water from '../assets/water-tap.png'
import { motion } from 'framer-motion';
const ExtraSectionTwo = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      <h1 className="text-xl lg:text-3xl text-center font-semibold"><span className="">OUR</span> <span className="text-[#ffb606] ">MISSION</span></h1>
      <p className="text-center mt-2 text-base lg:text-lg font-medium ">Your Attention Is Changed The Part Of World.Give a helping hand to those who need it!</p>
      <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4 mb-16"></p>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={rice} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Food</h1>
         <p className='text-center'>Support food charities to nourish communities and empower sustainable growth, one meal at a time.</p>
        </motion.div>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={cloth} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Cloth</h1>
         <p className='text-center'>Your gently used clothes can empower local charities. Donate today; make a meaningful difference tomorrow.</p>
        </motion.div>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={learn} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Education</h1>
         <p className='text-center'>Empower the future: Support education charities to unlock every child’s potential</p>
        </motion.div>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={healthcare} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Health</h1>
         <p className='text-center'>Support health charities to bridge the gap for those facing medical hardships. Your contribution can heal.</p>
        </motion.div>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={family} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Shelter</h1>
         <p className='text-center'>Join hands to provide shelter: Your support helps charities create homes and hope for those in need.</p>
        </motion.div>
        <motion.div
        whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
        className="border-2 border-[#ffb606] px-4 relative py-6">
          <div className='w-16 bg-[#ffb606] py-2 px-3 absolute -top-7 left-32'><img className='w-10' src={water} alt="" /></div>
         <h1 className='text-xl font-medium text-center hover:text-[#ffb606] mb-2 mt-6'>Charity For Clean Water</h1>
         <p className='text-center'>Every drop counts: Support clean water charities to quench the thirst of communities in need.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;