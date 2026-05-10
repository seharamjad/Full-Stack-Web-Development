import { useEffect, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap"
import { useNavigate, useParams } from "react-router"
import { getStudentById, updateStudent } from "../api/studentApi";

//array for courses list 
const COURSES = ['MERN', 'React', 'AI', 'Web', 'Graphic']

const EditStudentPage = () => {
    //reads the id from URL as a parameter
    const { id } = useParams();
    const navigate = useNavigate();

    //state for handling the form input fields
    const [formData, setFormData] = useState({
        name: '', email: '', course: '', marks: '', city: ''
    })
    //state for handling the error
    const [error, setError] = useState(null);
    //hook to showing the messages
    const [message, setMessage] = useState(null);
    //hook for fetching the student data
    const [fetchingStudent, setFetchingStudent] = useState(true);
    //hook for submitting the student data
    const [submitting, setSubmitting] = useState(false);

    // fetch existing student data to pre-fill the form
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                setFetchingStudent(true);
                const res = await getStudentById(id);
                const s = res.data;
                setFormData({
                    name: s.name || '',
                    email: s.email || '',
                    course: s.course || '',
                    marks: s.marks !== undefined ? s.marks : '',
                    city: s.city || ''
                });
            } catch (err) {
                setError('Failed to load student data');
            } finally {
                setFetchingStudent(false);
            }
        };
        if (id) fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
        if (!formData.name || !formData.email || !formData.course || !formData.city || formData.marks === '') {
            setError('Please fill all fields');
            return;
        }
        try {
            setSubmitting(true);
            const payload = { ...formData, marks: Number(formData.marks) };
            const res = await updateStudent(id, payload);
            setMessage(res.message || 'Student updated successfully!');
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Could not update student');
        } finally {
            setSubmitting(false);
        }
    };

    if (fetchingStudent) return <p className="text-center py-5">Loading student data...</p>;

    return (
        <div>
            <Container className="py-4">
                <h1>Edit Student Record</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="editStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            Please enter your full name
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="editStudentEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.email} type="email" name="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                            Please enter your valid email address
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="editStudentCourse">
                        <Form.Label>Select Course:</Form.Label>
                        <Form.Select name="course" value={formData.course} onChange={handleChange}>
                            <option value="">--- Select a course ---</option>
                            {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="editStudentMarks">
                        <Form.Label>Marks (0-200):</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.marks} type="number" name="marks" min={0} max={200} />
                        <Form.Text className="text-muted">
                            Please enter marks between 0 and 200
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="editStudentCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.city} type="text" name="city" placeholder="Enter your city" />
                    </Form.Group>

                    <div className="d-flex gap-2">
                        <Button type="submit" variant="primary" disabled={submitting}>
                            {submitting ? 'Saving…' : 'Save Changes'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
export default EditStudentPage