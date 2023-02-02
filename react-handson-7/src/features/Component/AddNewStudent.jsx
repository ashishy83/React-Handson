import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../Slice";

const AddNewStudent = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate();
  const newObj = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  };

  const onCancel = () => {
    navigate("/student");
  };

  const handleChange = (e) => {
    newObj[e.target.name] = e.target.value;
  };

  const handleUpdate = (e) => {
    // e((prevObj) => {
    //   prevObj.push(newObj);
    //   return prevObj;
    // });
    dispatch(addData(newObj));
    
    navigate("/student");
  };
  return (
    <div>
      
      <div className="input-container">
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="Age"
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="Course"
          onChange={handleChange}
          placeholder="Course"
        />
        <input
          type="text"
          name="Batch"
          onChange={handleChange}
          placeholder="Batch"
        />
      </div>
      <div className="btns">
        <button onClick={onCancel} className="cancel-btn">
          <span className="cancel-link">Cancel</span>{" "}
        </button>
        <button className="cancel-btn add-btn" onClick={handleUpdate}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewStudent;