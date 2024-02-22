export default function Region(props) {
    const terrainColors = {
        'w': 'blue',
        'b': 'yellow',
        'g': 'green',
        'f': 'orange',
        'm': 'gray',
        's': 'white'
    }

    const terrainColor = terrainColors[props.terrainType];
    const decoration = props.decoration;

    const beachStyle = {
        'maxWidth': '1rem',
        'width': '1rem',
        'height': '1rem',
        'backgroundColor': terrainColor,
        'borderRadius': ''
    };

    return (
        <div style={{
            'maxWidth': '.4rem',
            'width': '.4rem',
            'height': '.4rem',
            'fontSize': '.2rem',
            'backgroundColor': terrainColor,
        }}>{decoration}</div>
    )
}