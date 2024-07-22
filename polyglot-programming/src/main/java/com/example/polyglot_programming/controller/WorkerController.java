package com.example.polyglot_programming.controller;

import com.example.polyglot_programming.model.Worker;
import com.example.polyglot_programming.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "http://localhost:3000")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @GetMapping
    public List<Worker> getAllProducts() {
        return workerService.getAllWorkers();
    }

    @GetMapping("/{category}")
    public List<Worker> getProductsByCategory(@PathVariable String category) {
        return workerService.getWorkersByCategory(category);
    }
}
