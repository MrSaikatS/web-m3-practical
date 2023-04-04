const Display = () => {
  return (
    <>
      <div className='grid h-screen place-items-center text-white'>
        <div className='max-w-md'>
          <div className='grid grid-cols-3'>
            <div className=''></div>
            <div className='col-span-2 flex items-center justify-center gap-4 rounded-t-xl bg-black/30 p-4 backdrop-blur-sm'>
              <img
                src='https://randomuser.me/api/portraits/women/32.jpg'
                alt=''
                className='h-12 w-12 rounded-full ring-2 ring-purple-500'
              />
              <span className='text-3xl'>Lauren Bradley</span>
            </div>
          </div>
          <div className='rounded-b-xl rounded-s-xl bg-black/20 p-8 shadow-2xl  backdrop-blur-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            quisquam debitis distinctio eius iure eos, quidem et. Ullam tempora
            nesciunt earum in! Minima suscipit voluptas eius quidem hic, omnis
            natus.
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
