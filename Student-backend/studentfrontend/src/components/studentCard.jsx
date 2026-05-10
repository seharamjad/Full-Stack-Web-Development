import { Card, Button, Badge, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const StudentCard = ({ student, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${student.name}" `)) {
            onDelete(student._id);
        }
    };
    return (
        <Card style={{ width: '100%', maxWidth: '28rem' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem' }}>{student.name}</Card.Title>
                <Card.Text>
                    <div><strong>Student email:</strong> {student.email}</div>
                    <div><strong>Student city:</strong> {student.city}</div>
                    <div><strong>Student course:</strong> {student.course}</div>
                </Card.Text>
            </Card.Body>

            <Card.Footer className="text-muted pt-4">Marks: <Badge bg="secondary">{student.marks}</Badge>
                <Button variant="warning" className="float-end mx-2" onClick={() => navigate(`/edit-student/${student._id}`)}>Edit</Button>
                <Button variant="danger" className="float-end" onClick={handleDelete}>Delete</Button>
            </Card.Footer>
        </Card>
    );
};

export default StudentCard;
