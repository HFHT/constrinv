import Location from './Location'

const Locations = (props) => {
    return (
    <div className={props.className}>
        <Location locLabel="Location:" locSetter="useLoc" orgProfile={props.orgProfile}/>
        <Location locLabel="Ship To:" locSetter="useShip" orgProfile={props.orgProfile}/>
    </div>
    )
}
export default Locations