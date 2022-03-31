import './daily.css'

function Daily({ onClose, day }) {
    return (
        <>
            <div onClick={onClose} id='balck'>
            </div>
            <div id='back'>
                <p>{day.year}/{day.month + 1}/{day.day}</p>
                <form>
                    <textarea id='dailyNote' ></textarea>
                    <div id='sibal'>
                        <button type='submit'>저장</button>
                        <button>삭제</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Daily;