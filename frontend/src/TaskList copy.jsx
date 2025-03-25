// src/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
            onDelete(id);
        }
    };

    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
};

export default TaskList;