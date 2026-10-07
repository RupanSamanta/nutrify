const ProgressBar = ({ max, value, strokeWidth = 2.5, stroke="#9ac44d"}) => {
    const strokeDash = value / max * 100;
    return (
        <svg className="circular-chart" viewBox="0 0 36 36">
            <path className="circle-bg" strokeWidth={strokeWidth}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle-progress"
                strokeDasharray={`${strokeDash}, 100`}
                stroke={strokeDash ? stroke : 'transaparent'} strokeWidth={strokeWidth}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    )
}

export default ProgressBar