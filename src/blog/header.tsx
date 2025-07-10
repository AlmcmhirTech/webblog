import wmsuLogo from '../assets/wmsulogo.png'

export function Header(){
    return(
        <div className="sticky w-screen bg-[#373737]">
            <div className="grid grid-cols-[1fr_1fr] items-center max-w-[1600px] m-auto py-4">
                <div className="flex items-center">
                    <img src='../assets/ccslogo.png' className="w-13" alt="" />
                    <img src={wmsuLogo} className="w-13" alt="" />
                    <h2 className="text-2xl font-['Roboto'] font-bold text-[#E5D2B8] ml-4">Off Ices</h2>
                </div>

                <div>
                    <ul className="flex justify-end">
                        <li className="px-3 "><a className="hover:bg-[#4b4b4b] font-['Roboto'] text-white text-lg" href="/webblog/#/tour">Latest Tour</a></li>
                        <li className="px-3"><a className="font-['Roboto'] text-white text-lg" href="/webblog">Home</a></li>
                        <li className="px-3 "><a className="font-['Roboto'] text-white text-lg" href="/webblog/#/travels">Travels</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
//AIzaSyBFyNhMXTf-GAy83RT4hw-7Pc_mp2stXIs