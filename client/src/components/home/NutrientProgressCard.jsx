import ProgressBar from "./ProgressBar"

const NutrientProgressCard = ({ nutrientData, stroke }) => {
    return (
        <div>
            <div className="relative size-28 m-auto">
                <ProgressBar stroke={stroke} strokeWidth={2.5} max={nutrientData.target} value={nutrientData.consumed} />
                <div className="absolute -translate-1/2 left-1/2 top-1/2 flex flex-col">
                    <span className="text-3xl font-bold tracking-tighter">{nutrientData.consumed}</span>
                    <span className="text-gray-500 text-sm">/ {nutrientData.target}g</span>
                </div>
            </div>
            <span className="text-md text-gray-500 font-bold">{nutrientData.name}</span>
        </div>
    )
}

export default NutrientProgressCard