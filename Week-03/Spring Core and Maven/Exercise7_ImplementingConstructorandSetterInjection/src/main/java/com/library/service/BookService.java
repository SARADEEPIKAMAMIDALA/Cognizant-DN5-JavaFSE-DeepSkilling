package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Default Constructor
    public BookService() {

        System.out.println("Default Constructor Called");

    }

    // Constructor Injection
    public BookService(BookRepository bookRepository) {

        this.bookRepository = bookRepository;

        System.out.println("Constructor Injection Executed");

    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {

        this.bookRepository = bookRepository;

        System.out.println("Setter Injection Executed");

    }

    public void displayService() {

        System.out.println("Book Service Bean Created");

        bookRepository.displayRepository();

    }

}