package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.entity.Book;
import com.library.repository.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository repository;

    // Insert Book

    @PostMapping
    public Book addBook(
            @RequestBody Book book) {

        return repository.save(book);

    }

    // Get All Books

    @GetMapping
    public List<Book> getBooks() {

        return repository.findAll();

    }

    // Get Book by Id

    @GetMapping("/{id}")
    public Book getBook(
            @PathVariable Long id) {

        return repository.findById(id)
                .orElse(null);

    }

    // Delete Book

    @DeleteMapping("/{id}")
    public String deleteBook(
            @PathVariable Long id) {

        repository.deleteById(id);

        return "Book Deleted Successfully";

    }

}