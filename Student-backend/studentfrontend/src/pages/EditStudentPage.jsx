import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

//array for courses list 
const COURSES = ['Mern stack', 'React', 'AI', 'Web', 'Graphic']
const EditStudentPage = () => {
    //reads the id from URL as a parameter
    const { id } = useParams();
    const navigate = useNavigate();

    //state for handling the form input fields
    const [formData, setFormData] = useState({
        name: '', email: '', course: '', marks: '', city: ''
    })
    //state for handling the error
    const [error, setError] = useState({});
    //hook to showing the messages
    const [message, setMessage] = useState(null);
    //hook for fetching the student data
    const [fetchingStudent, setfetchingStudent] = useState(true);
    //hook for submitting the student data
    const [submitting, setSubmitting] = useState(false);


    return (
        <div>
            <Container>
                <h1>Edit Student Record</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            Please enter your full name
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                            Please enter your valid email address
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select Course:</Form.Label>
                        <Form.Select name="course" onChange={handleChange}>
                            <option>--- Select a course ---</option>
                            {COURSES.map(c => <option value={c}>{c}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Marks (0-100):</Form.Label>
                        <Form.Control onChange={handleChange} type="number" name="marks" min={0} max={100} />
                        <Form.Text className="text-muted">
                            Please enter marks between 0 to 100
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City:</Form.Label>
                        <Form.Control onChange={handleChange} type="text" name="city" placeholder="Enter your city" />
                    </Form.Group>

                    <div className="d-flex gap-2">
                        <Button type="submit" variant="primary">Save Student</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
export default EditStudentPage