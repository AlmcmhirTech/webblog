import bgHome from '../../assets/homebackground.jpg'

export function Homepage(){
    return(
        
        <div className="h-[855px] overflow-hidden">
            <div className="relative">
                <img className='opacity-80 brightness-50' src={bgHome} alt="" />
                <div className="flex flex-col justify-center absolute top-60 left-1/2 -translate-x-1/2">
                    <h1 className="font-['Roboto'] font-bold text-[#E5D2B8]">Off Ice Summers are the best!</h1>
                    
                    <button className="m-auto mt-8 bg-[#373737]"><a className="font-['Roboto'] font-bold text-white text-lg" href="/webblog/travels">Figure out why...</a></button>
                </div>
            </div>
        </div>
      
    )
}