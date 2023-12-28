const Player = () => {
    return (
        <div className="player">
            <div className="time-controller">
                <p>Start Time</p>
                <input type="range" name="tc-range" id="tc-range" />
                <p>End Time</p>
            </div>

            <div className="play-controller"></div>
        </div>
    )
}

export default Player;