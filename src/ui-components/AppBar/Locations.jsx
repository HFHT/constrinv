import Location from './Location'

const Locations = (props) => {
    return (
    <div className={props.className}>
        <Location locLabel="Location:" locSetter="useLoc" />
        <Location locLabel="Ship To:" locSetter="useShip" />
    </div>
    )
}
export default Locations