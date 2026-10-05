const ProgressBar = ({ max, value }) => {
    return (
        <svg className="circular-chart" viewBox="0 0 36 36">
            <path className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle-progress"
                strokeDasharray={`${value / max * 100}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    )
}

export default ProgressBar