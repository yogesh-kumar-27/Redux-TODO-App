import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDO, removeToDo } from "../redux/action/index";

const ToDo = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todoReducers.list);
  return (
    <>
      <div className="container todo text-center">
        <h1 className="text-white py-5">To Do App</h1>
        <figure>
          <figcaption className="text-white py-5">
            Add Your List Here
          </figcaption>
        </figure>
        <div className="col-4 offset-4 shadow">
          <input
            className="form-control"
            placeholder="Add Here...."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="container py-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(addToDo(data), setData(""))}
          >
            {" "}
            <i className="fas fa-plus"></i>{" "}
          </button>

          <div className="show-item col-4 offset-4">
            {list.map((item) => {
              return (
                <div key={item.id}>
                  <h3 className="item">{item.data }</h3>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(deleteToDO(item.id))}
                  >
                    <i className="fas fa-trash-alt"></i>{" "}
                  </button>
                </div>
              );
            })}
          </div>
          <div className='container'>
            <button className='btn btn-outline-info' onClick={()=>dispatch(removeToDo())}>Clear all</button>
          </div>
        </div>
      </div>

 
    </>
  );
};

export default ToDo;
