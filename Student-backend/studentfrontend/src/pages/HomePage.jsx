import { Alert, Col, Row } from "react-bootstrap";
import { deleteStudent, getAllStudents } from "../api/studentApi";
import { useEffect, useState } from "react";
import StudentCard from "../components/studentCard";
import Loader from "../components/loader";

const HomePage = () => {
    const [student, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await getAllStudents();
            setStudents(res.data || []);
        } catch (err) {
            setError("Error fetching students data");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            const data = await deleteStudent(id);
            setStudents((prev) => prev.filter((s) => s._id !== id));
            setMessage({ variant: 'success', text: data.message });
        } catch (err) {
            setMessage({ variant: 'danger', text: 'Could not delete the student' });
        }
        setTimeout(() => setMessage(null), 4000);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="container py-4">
            <h1>All Students Data</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {
                message && (
                    <Alert variant={message.variant}>{message.text}</Alert>
                )
            }

            {student.length === 0 ? (
                <p>No students data found</p>
            ) : (
                <Row xs={1} md={2} lg={4}>
                    {student.map((s) => (
                        <Col key={s._id} className="mb-3">
                            <StudentCard student={s} onDelete={handleDelete} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default HomePage;
