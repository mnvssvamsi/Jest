import Col from "react-bootstrap/Col"

const ScoopOption=({name,imagePath})=>{
    return <Col style={{textAlign:center}}>
        <img style={{width:'75%'}} src={`http://localhost:3030/${imagePath}`} alt={`${name} Scoop`} />
    </Col>
}

export default ScoopOption