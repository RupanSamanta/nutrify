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
    <div className="home-dashboard bg-[#9ac44d] p-4">
      <div className="nutrient-dashboard w-full bg-white px-3 py-5 rounded-md">
        <DateSelector />
        <CalorieStats data={data} />
        <NutrientStats />
      </div>

    </div>
  )
}

export default Home