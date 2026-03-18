import TopMenuItem from "./TopMenuItem"
export default function TopMenu(){
    return (
        <div className=" text-white fixed top-0 left-0 bg-[var(--color-primary-purple)] w-full h-[50px] z-30 flex flex-row justify-between items-center px-6 ">
            <div className="">
                <TopMenuItem title="Rental Car Center" pageRef={""}/>
            </div>
            <div className="flex flex-row gap-6">
                <TopMenuItem title="Bookings" pageRef={""}/>
                <TopMenuItem title="Account" pageRef={""}/>
            </div>
            
        </div>
    )
}