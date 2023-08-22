const Paragraph = props => {
    return ( 
        <p style={{color: props.color}}>{props.label.toUpperCase()}</p>
    )
}

Paragraph.defaultProps = {
    label: 'clique no botão para ver o alerta',
    color: 'blue'
}

export default Paragraph