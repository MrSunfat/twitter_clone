import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useGlobalContext } from '../../../context';
import TrendItem from './TrendItem';

function Trends() {
    const { trends } = useGlobalContext();

    return (
        <div className="trendContainer">
            <div className="trendContainer__header">
                <h2>Trends for you</h2>
                <SettingsOutlinedIcon className="icon" />
            </div>
            {trends.map((trend, index) => {
                const { classify, nameTrend, numberFollowers } = trend;

                return (
                    <TrendItem
                        key={index}
                        classify={classify}
                        nameTrend={nameTrend}
                        numberFollowers={numberFollowers}
                    />
                );
            })}
            <div className="trendContainer__footer">Show more</div>
        </div>
    );
}

export default Trends;
