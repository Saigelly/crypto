import { WithRuBalance } from '../../helpers/hoc/withRuBalance'
import './styles.css'

const Card = ({ balance, setBalance, ruBalance }) => {
   
    return (
        <div className="card">
            <div className="card__block">
                <p className="card__bank-name">NEW TECH</p>
                <button onMouseEnter={() => console.log("---enter")} onClick={setBalance}>Add money</button>
            </div>
            <div className="card__block">
                <p className="card__user-name">
                    Molchanov Dmitriy
                </p>
                <p className="card__balance">
                    {balance} $
                </p>
            </div>
        </div>
    )
}

export default WithRuBalance(Card);