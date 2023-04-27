import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskItem({ task, onDelete,onUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate);
  };
  const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>{
  setShowUpdate(false);
onUpdate(id,updatedTitle,updatedTaskDesc);
  }
  return (
    <div className="task-item">
      {showUpdate ? (
        <TaskCreate task={task} taskFormUpdate={true} 
        onUpdate={handleSubmit}
        />
      
        ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDelete}>
              Sil
            </button>
            <button className="task-update" onClick={handleUpdateClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
