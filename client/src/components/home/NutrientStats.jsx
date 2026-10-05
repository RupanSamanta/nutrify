import NutrientProgressCard from "./NutrientProgressCard"

const NutrientStats = () => {
  const nutrientProgressData = [
    {
      name: 'Carbs',
      target: 224,
      consumed: 60
    }, {
      name: 'Protein',
      target: 120,
      consumed: 20
    }, {
      name: 'Fat',
      target: 128,
      consumed: 9
    }, 
  ];  
  const strokeColor = [
    '#f00', '#f90', '#765341'
  ]
  return (
    <div className="nutrient-stats m-5">
      <div className="flex items-center gap-2 mb-5 text-gray-400">
        <span>Eaten</span>
        <div className="w-full h-px bg-gray-200"></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1">
        {nutrientProgressData.map((data, ind) => {
          return <NutrientProgressCard key={ind} nutrientData={data} stroke={strokeColor[ind]} />
        })}
      </div>
    </div>
  )
}

export default NutrientStats