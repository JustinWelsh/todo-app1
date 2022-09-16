package com.justin.todoapp1.repositories;

import com.justin.todoapp1.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
