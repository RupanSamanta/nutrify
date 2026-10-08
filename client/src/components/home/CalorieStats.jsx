import ProgressBar from "./ProgressBar"

const CalorieStats = ({data}) => {
    
    return (
        <div className="calorie-stats grid grid-cols-3 grid-rows-1 place-items-center mt-4">
            <div className="flex flex-col justify-center gap-2 text-sm text-gray-500">
                <span>Eaten</span><span className="tracking-tight text-3xl text-black font-medium">{data.eaten}</span><span>kcal</span>
            </div>
            <div className="chart-container size-45 relative">
                <ProgressBar max={data.totalCalorie} value={data.calorieEaten} />
                <div className="absolute -translate-1/2 left-1/2 top-1/2 flex flex-col gap-4 mt-4">
                    <span className="text-[2.85rem] font-medium tracking-tighter">{data.calorieEaten}</span>
                    <span className="text-gray-500">kcal left</span>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2 text-sm text-gray-500">
                <span>Burned</span><span className="tracking-tight text-3xl text-black font-medium">{data.burned}</span><span>kcal</span>
            </div>
        </div>
    )
}

export default CalorieStats