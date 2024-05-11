import about from '../assets/abou.jpg'
const ExtraSectionOne = () => {
  return (
    <div className="container px-4 mx-auto my-10">
      <h1 className="text-3xl font-semibold"><span className="border-b-2 border-b-[#ffb606]">About</span> <span className="text-[#ffb606]">Be aHand</span></h1>
      <div className='flex justify-between w-full items-center gap-4'>
        <div className='w-3/5'>
          <h3 className="text-xl font-medium mt-6 mb-2">Who We Are</h3>
          <p className="text-[#676767] mb-2">Give a Hand is a registered charity in the United Kingdom (Charity Number 1170329). Our mission is to provide essential support to vulnerable communities in rural parts of Africa. We focus on three key areas:</p>
          <ol className="list-decimal space-y-3 ml-5">
            <li><span className="font-bold">Food Assistance:</span> We ensure that no one goes hungry by distributing food supplies to widows, orphans, and the elderly.</li>
            <li><span className="font-bold">Medication:</span> We collaborate with local partners to provide essential medications, improving health outcomes.</li>
            <li><span className="font-bold">Education:</span> We empower individuals through educational resources, contributing to positive change.</li>
          </ol>
          <button className="px-2 lg:px-3 font-semibold text-xs lg:text-base text-white bg-[#ffb606] mt-4 py-2">Read More</button>
        </div>
        <div className='w-2/5'>
           <img src={about} alt="" />
           <p className='font-medium text-center'><span className="text-[#ffb606] text-lg">Be aHand</span> Start Their Work With Small organizations In The Year 1990.Now Be aHand is world wide organizations.</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;