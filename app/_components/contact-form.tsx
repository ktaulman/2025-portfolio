import SectionHeader from "./text/section-header";

export default function ContactForm() {
  return (
    <>
      <SectionHeader>Contact</SectionHeader>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Name
          </p>
          <input
            placeholder="Your Name"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none h-14 placeholder:text-[#9dabb8] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Email
          </p>
          <input
            placeholder="Your Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none h-14 placeholder:text-[#9dabb8] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Message
          </p>
          <textarea
            placeholder="Your Message"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none min-h-36 placeholder:text-[#9dabb8] p-4 text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Send Message</span>
        </button>
      </div>
    </>
  );
}
