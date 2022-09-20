package com.justin.todoapp1.controllers;

import com.justin.todoapp1.models.Task;
import com.justin.todoapp1.repositories.TaskRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class TaskController {

    //    Dependency Injection
    private final TaskRepository taskDao;

    public TaskController(TaskRepository taskDao) {
        this.taskDao = taskDao;
    }

//    TODO: Implement C.R.U.D functionality

    //TODO: Read functionality
    @GetMapping
    @ResponseBody
    public List<Task> getAllTasks() {
        return taskDao.findAll();
    }

    //TODO: Create functionality
    // @ResponseBody: Formats the response in a standard JSON format
    // @RequestBody: Is a parameter that accepts an object that matches one of your models
    @PostMapping
    @ResponseBody
    public Task createOrUpdateTask(@RequestBody Task task) {
        return taskDao.save(task);
    }

    //TODO: Delete functionality
    @DeleteMapping
    @ResponseBody
    public List<Task> deleteTask(@RequestBody Task task) {
        taskDao.delete(task);
        return taskDao.findAll();
    }

    //TODO: Update functionality
    // function should accept a single Task
    // use taskDao.save() to update task
    // return updated task

//    @PutMapping
//    @ResponseBody
//    public Task updateTask(@RequestBody Task task) {
//        return taskDao.save(task);
//    }

}
