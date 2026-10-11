import { CheckCircle2, Hamburger, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const MealStatsCard = ({ data }) => {
    const progress = parseInt(data.calorieEaten / data.totalCalorie * 100);
    return (
        <div className="flex justify-between items-center px-4">
            {data?.icon ? <img src={data?.icon ? data.icon : "" } className="size-13"/> : <Hamburger size={25}/>}
            <div className="flex flex-col flex-1 text-left pl-5">
                <div className="flex items-center gap-2 text-lg font-medium capitalize">{data.title} {data.calorieEaten >= data.totalCalorie ? <CheckCircle2 size={18} className="text-themegreen" /> : ""}</div>
                <div className="flex items-center gap-3">
                    <div className="w-20 h-2 rounded-full"
                        style={{
                            backgroundImage: `linear-gradient(to right, var(--color-themegreen) ${progress}%, var(--color-gray-200) ${progress}%)`
                        }}
                    />
                    <div className="text-gray-500">{data.calorieEaten} / {data.totalCalorie} kcal</div>
                </div>
            </div>
            <Button variant="outline" size="icon" disabled className="rounded-full"><Plus /></Button>
        </div>
    );
}

export default MealStatsCard