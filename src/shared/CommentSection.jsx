import React from 'react'
import "../shared/commentsection.css"
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentSection = ({title}) => {
  return (
    <section className='comment__section'>
      <Container>
        <Row>
            <Col lg="12">
                <h1>{title}</h1>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CommentSection
