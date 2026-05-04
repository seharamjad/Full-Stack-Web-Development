import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


//array for courses list 
const COURSES = ['Mern stack', 'React', 'AI', 'Web', 'Graphic']
const AddStudentPage = () => {

    //state for handling the loading
    const [loading, setLoading] = useState(false);
    //state for handling the error
    const [error, setError] = useState({});
    //hook to showing the messages
    const [message, setMessage] = useState(null);
    return (

        <Row className="justify-content-center">
            <Col md={6} lg={8}>
                <h1>Add Student</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            Please enter your full name
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                            Please enter your valid email address
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select Course:</Form.Label>
                        <Form.Select name="course">
                            <option>--- Select a course ---</option>
                            {COURSES.map(c => <option value={c}>{c}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Marks (0-100):</Form.Label>
                        <Form.Control type="number" name="marks" min={0} max={100} />
                        <Form.Text className="text-muted">
                            Please enter marks between 0 to 100
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Enter your city" />
                    </Form.Group>

                    <div className="d-flex gap-2">
                        <Button type="submit" variant="primary">Save Student</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}
export default AddStudentPage;