package com.example.backend.controllers;

import com.example.backend.models.Task;
import com.example.backend.services.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class TaskController {

    @RestController
    @RequestMapping("/tasks")
    @CrossOrigin(origins = "http://localhost:4200")
    public class TaskController {

        private final TaskService taskService;

        public TaskController(TaskService taskService) {
            this.taskService = taskService;
        }

        @PostMapping("/create")
        public ResponseEntity<Task> createTask(@RequestBody Task task) {
            Task savedTask = taskService.createTask(task);
            return ResponseEntity.ok(savedTask);
        }
    }
}
