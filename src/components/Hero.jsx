import React, { useState } from 'react'
import { DownIcon, PlusIcon } from '../utils/icons';
import Swal from 'sweetalert2'
import OtherTask from './OtherTask';
const Hero = () => {
    const formList = {
        titel : "",
        datum : "",
        standort : "",
        preis : "",
        details : "",
    }
    const [form, setForm] = useState(formList);
    const [error, setError] = useState(false)
    const [upload, setUpload] = useState([]);
    const handleUpload = (event) => {
        const files = [...event.target.files];
      const newUploads = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setUpload((prev) => [...prev, ...newUploads]);
    };
    const formHandler = (e) => {
        e.preventDefault();
        setError(true)
        if (
          form.titel !== '' &&
          form.datum !== '' &&
          form.standort !== '' &&
          form.preis !== '' &&
          form.details !== ''
      ) {
          setForm(formList)
          setError(false)
          console.log(form)
          Swal.fire({
              title: 'success',
              text: 'Do you want to continue',
              icon: "success",
              confirmButtonText: 'Yes'
          })
      }
        }
  return (
    <>
        <div className='py-[60px] flex flex-col justify-center items-center px-4'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight leading-[122%] text-oil'>Event einsenden</h1>
            <p className='max-w-3xl mx-auto text-xl font-light leading-[150%] text-neutral-500 py-5'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex gap-4 flex-wrap w-full max-w-[763px] bg-neutral-50 border border-dashed rounded-[30px] py-2 px-4 items-center">
      {upload.map((obj, i) => (
        <div
          key={i}
          className="relative size-24 rounded-lg overflow-hidden"
        >
          <img
            src={obj.url}
            alt="input image"
            className="w-full h-full object-cover"
          />
           </div>
      ))}
      <label className="w-24 h-20 border-2 border-dashed border-gray-300 rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-50">
        <input
          type="file"
          className="hidden"
          onChange={handleUpload}/>
        <PlusIcon/>
      </label>
    </div>
    <div className="relative w-full max-w-[763px] border border-light-grey rounded-full mt-5">
  <select
    className="appearance-none w-full bg-white text-sm font-bold text-neutural py-[17px] px-4 rounded-[30px] cursor-pointer outline-none text-neutral-500"
    onChange={(e) => console.log(e.target.value)}
  >
    <option value="Option 1">Kategorie</option>
    <option value="Option 2">Kategorie two</option>
    <option value="Option 3">Kategorie three</option>
  </select>
  <span className="absolute right-4 top-[50%] translate-y-[-50%] max-w-[763px]">
    <DownIcon />
  </span>
</div>
    <form className='pt-5'>
        <div className='flex gap-5 flex-col justify-center'>
        <div className='flex gap-5 max-xl:flex-wrap px-5 md:justify-center max-lg:justify-center'>
            <div className='w-6/12'>
                <input type="text" placeholder='Titel' className="placeholder:text-neutral-500 placeholder:font-bold placeholder:text-sm font-bold text-sm w-[371px] max-md:max-w-[310px] border border-light-grey rounded-full py-[17px] px-4 !outline-none text-neutral-500 placeholder:tracking-tight" onChange={(e) => setForm({...form,titel:e.target.value })} value={form.titel} />
                <p className='text-red-500 pl-5 font-semibold'>{error && !form.titel ? "Field is requried" : ""}</p>
            </div>
            <div className='w-6/12'>
                <input type="text" placeholder='Datum' className="placeholder:text-neutral-500 placeholder:font-bold placeholder:text-sm font-bold text-sm w-[371px] max-md:max-w-[310px] border border-light-grey rounded-full py-[17px] px-4 !outline-none text-neutral-500 placeholder:tracking-tight" onChange={(e) => setForm({...form,datum:e.target.value })} value={form.datum} />
                <p className='text-red-500 pl-5 font-semibold'>{error && !form.datum ? "Field is requried" : ""}</p>
            </div>
            </div>
            <div className='flex gap-5 max-xl:flex-wrap px-5 md:justify-center max-lg:justify-center'>
            <div className='w-6/12'>
                <input type="text" placeholder='Standort' className="placeholder:text-neutral-500 placeholder:font-bold placeholder:text-sm font-bold text-sm w-[371px] max-md:max-w-[310px] border border-light-grey rounded-full py-[17px] px-4 !outline-none text-neutral-500 placeholder:tracking-tight" onChange={(e) => setForm({...form,standort:e.target.value })} value={form.standort}/>
                <p className='text-red-500 pl-5 font-semibold'>{error && !form.standort ? "Field is requried" : ""}</p>
            </div>
            <div className='w-6/12'>
                <input type="text" placeholder='Preis' className="placeholder:text-neutral-500 placeholder:font-bold placeholder:text-sm font-bold text-sm w-[371px] max-md:max-w-[310px] border border-light-grey rounded-full py-[17px] px-4 !outline-none text-neutral-500 placeholder:tracking-tight" onChange={(e) => setForm({...form,preis:e.target.value })} value={form.preis}/>
                <p className='text-red-500 pl-5 font-semibold'>{error && !form.preis ? "Field is requried" : ""}</p>
            </div>
        </div>
        <div>
            <textarea placeholder='Details zur Veranstaltung' className='w-full max-w-[763px] !outline-none placeholder:text-neutral-500 placeholder:font-bold placeholder:text-sm font-bold text-sm border border-light-grey rounded-[30px] p-4 min-h-[132px] max-h-[132px] overflow-y-auto placeholder:pt-8 text-neutral-500 placeholder:tracking-tight' onChange={(e) => setForm({...form,details:e.target.value })} value={form.details}></textarea>
            <p className='text-red-500 pl-5 font-semibold'>{error && !form.details ? "Field is requried" : ""}</p>
        </div>
        <button onClick={formHandler} className='w-full max-w-[361px] bg-gradient-to-r from-blue-eyes to-ball-blue py-4 rounded-full text-white mx-auto font-bold text-base tracking-tight hover:bg-gradient-to-l duration-300 ease-linear'>Event einsenden</button>
        </div>
    </form>
    </div>
   <div className='pt-10'>
   <OtherTask/>
   </div>
    </>
  )
}

export default Hero