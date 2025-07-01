export function Header(){
    return(
        <div className="w-screen bg-[#99EDC3]">
            <div className="grid grid-cols-[1fr_1fr] items-center max-w-[1600px] m-auto py-4">
                <div className="flex items-center">
                    <img src="/src/assets/ccslogo.png" className="w-13" alt="" />
                    <img src="/src/assets/wmsulogo.png" className="w-13" alt="" />
                    <h2 className="text-2xl font-bold font-['Roboto'] text-[#FF6B6B] ml-4">IceOff Tours</h2>
                </div>

                <div>
                    <ul className="flex justify-end">
                        <li className="pr-3"><a className='text-[#FF6B6B]' href="">Home</a></li>
                        <li className="px-3 "><a className='text-[#FF6B6B]' href="">Schedules</a></li>
                        <li className="px-3"><a className='text-[#FF6B6B]'href="">Speakers</a></li>
                        <li className="pl-3"><a className='text-[#FF6B6B]' href="">Venue</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}