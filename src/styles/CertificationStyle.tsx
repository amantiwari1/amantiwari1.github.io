import styled from 'styled-components';
import { Row} from "react-bootstrap"


const CertificationCardDiv = styled(Row)`  
   text-align: center;
`

const CertificationCardStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  height: 100%;
  width: 100%;
`


export {CertificationCardDiv,CertificationCardStyle }