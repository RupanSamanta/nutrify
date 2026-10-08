import { Heart, Menu } from "lucide-react";
import CalorieStats from "./CalorieStats"
import DateSelector from "./DateSelector";
import NutrientStats from "./NutrientStatsCard";
import MealStatsCard from "./MealStatsCard";

const Home = () => {

  const data = {
    eaten: 1634,
    burned: 265,
    totalCalorie: 2650,
    calorieEaten: 750
  };

  const mealData = {
    breakfast: {
      totalCalorie: 768,
      calorieEaten: 0
    },
    lunch: {
      totalCalorie: 768,
      calorieEaten: 768
    },
    dinner: {
      totalCalorie: 768,
      calorieEaten: 20
    }
  }

  return (
    <div className="home-dashboard h-full p-6 px-7 bg-linear-to-b from-40% from-themegreen to-white to-40% *:w-full *:px-2 *:py-5 *:my-6 *:border *:border-gray-100 *:shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] *:rounded-md *:bg-white *:first:shadow-none *:first:border-none *:first:bg-transparent *:first:my-0">
      <div className="flex justify-between py-4 mb-3">
        <Heart size={22} />
        <span className="text-2xl font-bold">Nutrify</span>
        <Menu size={22} />
      </div>
      <div className="nutrient-dashboard">
        <DateSelector />
        <CalorieStats data={data} />
        <NutrientStats />
      </div>
      <div className="meal-dashboard grid grid-cols-1 gap-5">
        {Object.entries(mealData).map(([key, data]) => {
            return <MealStatsCard key={key} data={{...data, title: key}} />
        })}
      </div>
    </div>
  )
}

export default Home