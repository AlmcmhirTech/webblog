import industryimmersion from '../../assets/industryimmersion.jpg'

export function TravelsList(){
    return(
        <div className="w-full">
            <div className="max-w-[1600px] m-8">
                <div className="mb-8"><h1 className="font-['Roboto'] font-bold">Off Ice Travels</h1></div>

                <div className="grid grid-cols-[1fr_1fr_1fr] gap-10">
                    <div className="">
                        <div className="hover:bg-[#c5b6a1] p-4">
                            <a href="/webblog/tour">
                                <img className='shadow-md shadow-[#373737] opacity-90 brightness-80 mb-2' src={industryimmersion} alt="" />
                                <div>
                                    <span className="font-['Roboto'] font-bold text-[#373737] text-lg">BSCS Batch 2026 Industry Immersion</span><br />
                                    <span className="font-['Roboto'] text-[#373737]">June 08, 2025</span>
                                </div>
                            </a>
                        </div>
                    </div>
                     <div className="">
                        <div className="hover:bg-[#c5b6a1] p-4">
                            <a className='' href="">
                                <img className='shadow-md shadow-[#373737] opacity-100 brightness-0 mb-2' src={industryimmersion} alt="" />

                                <div>
                                    <span className="font-['Roboto'] font-bold text-[#373737] text-lg">More Coming Soon!</span><br />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}