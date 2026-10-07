import { Heart, Menu } from "lucide-react";
import CalorieStats from "./CalorieStats"
import DateSelector from "./DateSelector";
import NutrientStats from "./NutrientStats";

const Home = () => {

  const data = {
    eaten: 1634,
    burned: 265,
    totalCalorie: 2650,
    calorieEaten: 750
  };

  return (
    <div className="home-dashboard h-full p-6 px-7 bg-linear-to-b from-40% from-[#9ac44d] to-white to-40%">
      <div className="flex justify-between py-4 mb-3">
        <Heart size={22} />
        <span className="text-2xl font-bold">Nutrify</span>
        <Menu size={22} />
      </div>
      <div className="nutrient-dashboard w-full px-2 py-5 rounded-md bg-white shadow-[0_1px_10px_-1px_rgba(0,0,0,0.1)]">
        <DateSelector />
        <CalorieStats data={data} />
        <NutrientStats />
      </div>
    </div>
  )
}

export default Home