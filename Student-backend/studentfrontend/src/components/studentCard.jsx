import { Card, Button, Container, Badge } from "react-bootstrap";

const StudentCard = ({ student }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '2.25rem' }}>{student.name}</Card.Title>
                    <Card.Text>
                        <div><strong>Student email:</strong> {student.email}</div>
                        <div><strong>Student city:</strong> {student.city}</div>
                        <div><strong>Student course:</strong> {student.course}</div>
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted pt-4">Marks: <Badge>{student.marks}</Badge>
                    <Button variant="warning" className="float-end mx-2">Edit</Button>
                    <Button variant="danger" className="float-end">Delete</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}
export default StudentCard;