import { Hamburger, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const MealStatsCard = ({ data }) => {   
    const progress = parseInt(data.calorieEaten / data.totalCalorie * 100);
    console.log(progress);
    
    return (
        <div className="flex justify-between items-center px-4">
            <div><Hamburger size={30} /></div>
            <div className="flex flex-col flex-1 text-left pl-5">
                <div className="text-lg font-medium capitalize">{data.title}</div>
                <div className="flex items-center gap-3">
                    <div className={`w-20 h-2 bg-linear-to-r from-${0}% from-themegreen to-gray-200 to-${100}% rounded-full`}></div>
                    <div className="text-gray-500">{data.calorieEaten} / {data.totalCalorie} kcal</div>
                </div>
            </div>
            <Button variant="outline" size="icon" disabled className="rounded-full"><Plus /></Button>
        </div>
    );
}

export default MealStatsCard