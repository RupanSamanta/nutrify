import { ChevronLeft, ChevronRight } from "lucide-react"
import CalorieStats from "./CalorieStats"
import NutrientStats from "./NutrientStats";

const Home = () => {

  const data = {
    eaten: 1634,
    burned: 265,
    totalCalorie: 2650,
    calorieEaten: 750
  };

  return (
    <div className="home-dashboard bg-[#9ac44d] p-4">
      <div className="nutrient-dashboard w-full bg-white px-3 py-5 rounded-md">
        <div className="date-changer flex justify-between text-lg">
          <button><ChevronLeft /></button>
          <span className="font-semibold">Today, Oct 3</span>
          <button disabled><ChevronRight /></button>
        </div>
        <CalorieStats data={data} />
        <NutrientStats />
      </div>

    </div>
  )
}

export default Home