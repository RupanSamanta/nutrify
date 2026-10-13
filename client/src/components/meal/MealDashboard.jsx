import { ArrowLeft, Plus } from "lucide-react"

import NoFood from "@/assets/icons/nofood.png"
import { Button } from "../ui/button"
import FoodList from "./FoodList";

const MealDashboard = ({ title = "Dinner", foodList = [] }) => {
    foodList = [
        { icon: '', name: 'Burger', calories: 376 },
        { icon: '', name: 'Burger', calories: 376 },
        { icon: '', name: 'Burger', calories: 376 }
    ];
    const totalCalories = foodList.map((obj) => obj.calories).reduce((a, b) => a + b);
    return (
        <div className="meal-dashboard relative h-full p-6 px-7 bg-gray-100 *:w-full *:px-2 *:py-5">
            <div className="relative py-4 mb-3">
                <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 border-none bg-transparent"><ArrowLeft className="size-7!" /></Button>
                <div className="text-2xl font-bold">{title}</div>
            </div>
            {foodList.length ?
                <div className="nutrient-dashboard my-6 px-5! rounded-md border bg-white border-gray-100 shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] *:border-b *:border-gray-200 *:first:border-none *:last:border-none *:last:p-0 *:last:mt-3">
                    <div className="flex justify-between text-xl font-medium pb-3 mb-3">
                        <span className="">Total</span>
                        <span>{totalCalories} kcal</span>
                    </div>
                    {foodList.map((data, ind) => {
                        return <FoodList key={ind} data={data} />
                    })}
                </div>
                :
                <div className="grid gap-5 place-items-center translate-y-20">
                    <img src={NoFood} className="size-50" />
                    <div className="text-2xl">No Food Added</div>
                </div>
            }
            <div className="absolute bg-white bottom-0 left-0 p-8! m-0">
                <Button variant="outline" className="w-full rounded-full bg-themegreen py-7! border-none text-lg" >
                    <Plus className="size-5! mr-1" /> Add
                </Button>
            </div>
        </div>
    )
}

export default MealDashboard