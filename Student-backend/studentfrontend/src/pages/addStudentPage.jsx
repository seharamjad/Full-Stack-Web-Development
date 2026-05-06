import { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { addStudent } from "../api/studentApi";

const COURSES = ['MERN', 'React', 'AI', 'Web', 'Graphic'];

const AddStudentPage = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', course: '', marks: '', city: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const marksNum = Number(formData.marks);
    if (!formData.name || !formData.email || !formData.course || !formData.city || formData.marks === '') {
      setMessage({ variant: 'danger', text: 'Please fill all fields' });
      return;
    }
    try {
      setLoading(true);
      const payload = {
        ...formData,
        marks: marksNum,
      };
      const res = await addStudent(payload);
      setMessage({ variant: 'success', text: res.message || 'Student saved' });
      setFormData({ name: '', email: '', course: '', marks: '', city: '' });
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Could not save student';
      setMessage({ variant: 'danger', text: msg });
    } finally {
      setLoading(false);
    }
  };

  return (

    <Row className="justify-content-center py-4">
      <Col md={6} lg={8}>
        <h1>Add Student</h1>
        {message && <Alert variant={message.variant}>{message.text}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="studentName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <Form.Text className="text-muted">
              Please enter your full name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="studentEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <Form.Text className="text-muted">
              Please enter your valid email address
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="studentCourse">
            <Form.Label>Select Course:</Form.Label>
            <Form.Select name="course" value={formData.course} onChange={handleChange}>
              <option value="">--- Select a course ---</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="studentMarks">
            <Form.Label>Marks (0-200):</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.marks}
              type="number"
              name="marks"
              min={0}
              max={200}
            />
            <Form.Text className="text-muted">
              Please enter marks between 0 and 200
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="studentCity">
            <Form.Label>City:</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.city}
              type="text"
              name="city"
              placeholder="Enter your city"
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Saving…' : 'Save Student'}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default AddStudentPage;
