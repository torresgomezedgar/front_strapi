export default () => {
  return(
    <>
        <div className="bg-base-100 flex justify-around ">
            {/* Email */}
            <button className="btn btn-link text-white">
            <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            <a href="mailto:contact@example.com">admin@etgdigital.pro</a>
            </button>
            <button className="btn btn-link">
                <span>+57 3159994455</span>
            </button>
              
                <div className="flex justify-items-start">
                      <button>Es/</button>
                      <button>En</button>
                  </div>
        </div>
    </>
  )
}
