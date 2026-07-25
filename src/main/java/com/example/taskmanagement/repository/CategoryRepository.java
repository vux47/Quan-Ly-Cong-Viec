package com.example.taskmanagement.repository;

import com.example.taskmanagement.model.Category;
import java.util.ArrayList;
import java.util.List;

public class CategoryRepository {
    private final List<Category> categories = new ArrayList<>();

    public List<Category> findAll() {
        return categories;
    }

    public Category save(Category category) {
        categories.add(category);
        return category;
    }
}