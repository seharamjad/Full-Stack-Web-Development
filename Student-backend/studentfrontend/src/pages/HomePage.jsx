import { Col, Row } from "react-bootstrap";
import { getAllStudents } from "../api/studentapi";
import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";

const HomePage = () => {
    //defining the hooks 
    //useState for getting all the students data
    const [student, setStudents] = useState([]);
    //state for handling the loading
    const [loading, setLoading] = useState(false);
    //state for handling the error
    const [error, setError] = useState(null);


    //function that will fetch the students data from the API
    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllStudents()
            //passing the data to hook useState
            setStudents(data.data);
        } catch (error) {
            setError("Error fetching students data");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    //using useEffect for getting students data from API
    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h1>All Students Data</h1>

            {/*condition if there is no student data */}
            {student.length === 0 ? (
                <p>No students data found</p>
            ) : (
                <Row xs={1} md={2} lg={4}>
                    {student.map(s => (
                        <Col key={s._id}>
                            <StudentCard student={s} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}
export default HomePage;