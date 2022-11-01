import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/TaskService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>Todo List</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Tarefa</label>
                                <input {...register("task")} placeholder="Criar Tarefa" className="form-control" name="task" id="task" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Descrição</label>
                                <input {...register("assignee")} placeholder="Descrição" className="form-control" name="assignee" id="assignee" />
                            </div>
                        </div>
                        <div className="row mrgnbtm">
                            <div className="form-group col-md-12">
                                <label htmlFor="exampleInputEmail1">Status:</label>
                                <select className="form-control" {...register("status")}>
                                    <option>Aguardando</option>
                                    <option>Em Andamento</option>
                                    <option>Finalizado</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-danger mrgnbtm" />
                    </form>
                </div>
            </div>
        </div>
    )
}