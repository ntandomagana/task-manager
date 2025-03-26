package com.example.backend.controllers;

import com.example.backend.models.Task;
import com.example.backend.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



    @RestController
    @RequestMapping("/api/v1/tasks")
    @CrossOrigin(origins = "http://localhost:4200")
    public class TaskController {

        private final TaskService taskService;

        @Autowired
        public TaskController(TaskService taskService) {
            this.taskService = taskService;
        }

        @PostMapping("/create")
        public ResponseEntity<Task> createTask(@RequestBody Task task) {
            System.out.println(task.getDescription());
            System.out.println(task.getTitle());

            Task savedTask = taskService.createTask(task);
            return ResponseEntity.ok().body(savedTask);
        }
    }

