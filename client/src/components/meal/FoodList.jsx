import { Button } from "@/components/ui/button"
import { ChevronRight, Hamburger } from "lucide-react"
import { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"
import DeleteLogDialog from "./DeleteLogDialog"

const FoodList = ({ data }) => {
    const [show, setShow] = useState(false);
    const handler = useSwipeable({
        onSwipedLeft: () => {
            setShow((p) => !p);
        },
        delta: 30,
        trackMouse: true,
        trackTouch: true,
        preventScrollOnSwipe: true
    });

    useEffect(() => {
        document.addEventListener('click', (e) => {
            setShow((p)=> !p);
        });
    }, []);

    return (
        <div className="relative flex py-3 overflow-hidden">
            <DeleteLogDialog />
            <div {...handler} className="flex flex-1 justify-between items-center bg-white z-10 transition-all" style={{translate: show ? -40 : 0}}>
                {data?.icon ? <img src={data?.icon ? data.icon : ""} className="size-13" /> : <Hamburger size={25} />}
                <div className="flex flex-col flex-1 text-left pl-5">
                    <div className="flex items-center gap-2 text-lg font-medium capitalize">{data.name}</div>
                    <div className="flex items-center gap-3">
                        <div className="text-sm text-gray-500">{data.calories} kcal</div>
                    </div>
                </div>
                <Button variant="outline" size="icon" disabled className="rounded-full outline-none border-none"><ChevronRight strokeWidth={2} className="size-7!" /></Button>
            </div>
        </div>
    )
}

export default FoodList