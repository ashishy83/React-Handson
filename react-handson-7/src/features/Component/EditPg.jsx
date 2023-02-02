import { Link, useLocation, useNavigate } from "react-router-dom";
import { editData } from "../Slice";
import { useDispatch,useSelector } from "react-redux";

const EditPg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const index = location.state.data;
  const dispatch = useDispatch();

  const array = useSelector((state)=>state.dataKey)
  const newObj = {
    Name: array[index].Name,
    Age: array[index].Age,
    Course: array[index].Course,
    Batch: array[index].Batch,
  };
console.log(array)
  const onCancel = () => {
    navigate("/student");
  };

  const handleChange = (e) => {
    newObj[e.target.name] = e.target.value;
    console.log(newObj);
  };

  const handleUpdate = () => {
    // context.updateFunction((prevObj) => {
    //   prevObj[index] = newObj;
    //   return prevObj;
    // });
    dispatch(editData({newObj,index}));
    navigate("/student");
  };
  return (
    <div>
     
      <div className="input-container">
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          placeholder={array[index].Name}
        />

        <input
          type="text"
          name="Age"
          onChange={handleChange}
          placeholder={array[index].Age}
        />
        <input
          type="text"
          name="Course"
          onChange={handleChange}
          placeholder={array[index].Course}
        />
        <input
          type="text"
          name="Batch"
          onChange={handleChange}
          placeholder={array[index].Batch}
        />
      </div>
      <div className="btns">
        <button onClick={onCancel} className="cancel-btn">
          <Link to={"/student"} className="cancel-link">
            Cancel
          </Link>{" "}
        </button>
        <button className="cancel-btn add-btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPg;