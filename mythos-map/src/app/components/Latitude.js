import Region from "./Region"

export default function Latitude(props) {
    const regions = props.regions;

    return (
        <div style={{
            'display': 'flex'
        }}>
            {
                regions.map((region) => {
                    if (Math.random() > 0.5 && region == 'f') {
                        return <Region terrainType={region} decoration={'🌲'} />     
                    } else if (Math.random() > 0.7 && region == 'g') {
                        return <Region terrainType={region} decoration={'🌳'} />     
                    } else if (Math.random() > 0.7 && region == 'b') {
                        return <Region terrainType={region} decoration={'🌴'} />     
                    } else {
                        return <Region terrainType={region} decoration={''} />   
                    }       
                })
            }
        </div>
    )
}