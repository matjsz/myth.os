import Latitude from "./Latitude"

export default function MythosMap(props) {
    const latitudes = props.worldData;

    return (
        <div>
            {
                latitudes.map((regions) => {
                    return <Latitude regions={regions} />          
                })
            }
        </div>
    )
}