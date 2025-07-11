

const Contact = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbf9] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101910] text-4xl font-black leading-tight tracking-[-0.033em]">Contact Us</p>
                <p className="text-[#5a8c5a] text-base font-normal leading-normal">We're here to help! Reach out with your questions, feedback, or support needs.</p>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101910] text-base font-medium leading-normal pb-2">Your Name</p>
                <input
                  placeholder="Enter your name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101910] focus:outline-0 focus:ring-0 border border-[#d3e3d3] bg-[#f9fbf9] focus:border-[#d3e3d3] h-14 placeholder:text-[#5a8c5a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101910] text-base font-medium leading-normal pb-2">Email Address</p>
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101910] focus:outline-0 focus:ring-0 border border-[#d3e3d3] bg-[#f9fbf9] focus:border-[#d3e3d3] h-14 placeholder:text-[#5a8c5a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101910] text-base font-medium leading-normal pb-2">Subject</p>
                <input
                  placeholder="Enter the subject"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101910] focus:outline-0 focus:ring-0 border border-[#d3e3d3] bg-[#f9fbf9] focus:border-[#d3e3d3] h-14 placeholder:text-[#5a8c5a] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101910] text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  placeholder="Enter your message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101910] focus:outline-0 focus:ring-0 border border-[#d3e3d3] bg-[#f9fbf9] focus:border-[#d3e3d3] min-h-36 placeholder:text-[#5a8c5a] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#d7f3d7] text-[#101910] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Submit</span>
              </button>
            </div>
          </div>
          <div className="layout-content-container flex flex-col w-[360px]">
            <h1 className="text-[#101910] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Contact Information</h1>
            <div className="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
              <div className="text-[#101910] flex items-center justify-center rounded-lg bg-[#e9f1e9] shrink-0 size-12" data-icon="MapPin" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#101910] text-base font-medium leading-normal line-clamp-1">Address</p>
                <p className="text-[#5a8c5a] text-sm font-normal leading-normal line-clamp-2">IIIT Hyderabad, Gachibowli</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
              <div className="text-[#101910] flex items-center justify-center rounded-lg bg-[#e9f1e9] shrink-0 size-12" data-icon="Envelope" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#101910] text-base font-medium leading-normal line-clamp-1">Email</p>
                <p className="text-[#5a8c5a] text-sm font-normal leading-normal line-clamp-2">support@edupath.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
              <div className="text-[#101910] flex items-center justify-center rounded-lg bg-[#e9f1e9] shrink-0 size-12" data-icon="Phone" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#101910] text-base font-medium leading-normal line-clamp-1">Phone</p>
                <p className="text-[#5a8c5a] text-sm font-normal leading-normal line-clamp-2">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact