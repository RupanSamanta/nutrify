import { ChevronLeft, ChevronRight } from "lucide-react"
import ProgressBar from "./ProgressBar"

const Home = () => {
  const data = {
    eaten: 1634,
    burned: 265,
    totalCalorie: 2650,
    calorieEaten: 750
  }
  return (
    <div className="home-dashboard bg-[#9ac44d] p-4">
      <div className="nutrient-dashboard w-full bg-white px-3 py-5 rounded-md">
        <div className="date-changer flex justify-between text-lg">
          <button><ChevronLeft /></button>
          <span className="font-semibold">Today, Oct 3</span>
          <button disabled><ChevronRight /></button>
        </div>

        <div className="calorie-stats grid grid-cols-3 grid-rows-1 place-items-center mt-4">
          <div className="flex flex-col justify-center gap-2 text-sm text-gray-600">
            <span>Eaten</span><span className="tracking-tight text-3xl text-black font-semibold">{data.eaten}</span><span>kcal</span>
          </div>
          <div className="chart-container size-45 relative">
            <ProgressBar max={data.totalCalorie} value={data.calorieEaten} />
            <div className="absolute -translate-1/2 left-1/2 top-1/2 flex flex-col gap-4 mt-4">
              <span className="text-[2.85rem] font-bold tracking-tighter">{data.calorieEaten}</span>
              <span className="text-gray-600">kcal left</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 text-sm text-gray-600">
            <span>Burned</span><span className="tracking-tight text-3xl text-black font-semibold">{data.burned}</span><span>kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home