import { useState } from "react";

const TaskCreate = ({ onCreate, task, taskFormUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeArea = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update-form">
          <h3>Lütfen Görev Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Görevi Düzenle</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />

            <label className="task-label">Başlığı Düzenle</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleChangeArea}
            />
            <button className="task-btn update-btn" onClick={handleSubmit}>
              Kaydet
            </button>
          </form>
        </div>
      ) : (
        // Edit Form
        <div className="task-create">
          <h3>Lütfen Görev Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Görev Giriniz</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />

            <label className="task-label">Başlık</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleChangeArea}
            />
            <button className="task-btn" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
