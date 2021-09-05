import Location from './Location'
import { LocationsWrapper} from "../../styles/appStyles";
const Locations = (props) => {
    return (
    <LocationsWrapper>
        <Location locLabel="Location:" locSetter="useLoc" orgProfile={props.orgProfile}/>
        <Location locLabel="Ship To:" locSetter="useShip" orgProfile={props.orgProfile}/>
    </LocationsWrapper>
    )
}
export default Locations