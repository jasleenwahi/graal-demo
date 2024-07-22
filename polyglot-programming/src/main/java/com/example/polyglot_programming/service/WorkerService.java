package com.example.polyglot_programming.service;

import com.example.polyglot_programming.model.Worker;
import com.example.polyglot_programming.repo.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {
    @Autowired
    private WorkerRepository workerRepository;

    public List<Worker> getAllWorkers() { return  workerRepository.findAll();}

    public List<Worker> getWorkersByCategory(String category) {
        return workerRepository.findByCategory(category);
    }
}
