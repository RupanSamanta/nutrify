import { ArrowLeft, Plus } from "lucide-react"

import NoFood from "@/assets/icons/nofood.png"
import { Button } from "../ui/button"

const MealDashboard = ({title="Dinner", foodList=[]}) => {
    return (
        <div className="meal-dashboard  relative h-full p-6 px-7 bg-gray-100 *:w-full *:px-2 *:py-5">
            <div className="relative py-4 mb-3">
                <ArrowLeft size={22} className="absolute top-1/2 -translate-y-1/2" />
                <div className="text-2xl font-bold">{title}</div>
            </div>
            <div className="nutrient-dashboard my-6 border bg-white border-gray-100 shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)]">
                {foodList.length ? 
                    <></> : 
                    <div className="grid gap-5 justify-center">
                        <img src={NoFood} className="size-35" />
                        <div className="text-2xl">No Food Added</div>
                    </div>
                }
            </div>
            <div className="absolute bg-white bottom-0 left-0 p-10! m-0">
                <Button variant="outline" className="w-full rounded-full bg-themegreen py-7! border-none text-lg" >
                    <Plus className="size-5! mr-1"/> Add
                </Button>
            </div>
        </div>
    )
}

export default MealDashboard