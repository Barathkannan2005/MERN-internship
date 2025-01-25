import Invigilator from "../ContextComponents/Invigilator";


const Student = () =>{
    return(
        <div>
            <h2>This is a example of Student Hooks which is the alternative for props Drilling</h2>
            <h4>Student are writing their exams</h4>
            <Invigilator sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Student;