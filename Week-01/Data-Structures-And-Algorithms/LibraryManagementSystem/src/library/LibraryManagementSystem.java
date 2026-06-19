package library;

import java.util.Arrays;
import java.util.Comparator;

class Book {

    int bookId;
    String title;
    String author;

    public Book(int bookId, String title, String author) {

        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {

        return "Book ID: " + bookId +
                ", Title: " + title +
                ", Author: " + author;
    }
}

public class LibraryManagementSystem {

    // Linear Search
    public static Book linearSearch(Book[] books,
                                    String title) {

        for (Book book : books) {

            if (book.title.equalsIgnoreCase(title)) {
                return book;
            }
        }

        return null;
    }

    // Binary Search
    public static Book binarySearch(Book[] books,
                                    String title) {

        int left = 0;
        int right = books.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int result =
                    books[mid].title.compareToIgnoreCase(title);

            if (result == 0)
                return books[mid];

            if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Book[] books = {
                new Book(101, "Java", "James"),
                new Book(102, "Python", "Guido"),
                new Book(103, "C", "Dennis"),
                new Book(104, "Data Structures", "Mark")
        };

        System.out.println("Linear Search:");

        Book found =
                linearSearch(books, "Python");

        System.out.println(found);

        Arrays.sort(books,
                Comparator.comparing(book -> book.title));

        System.out.println("\nBinary Search:");

        Book result =
                binarySearch(books, "Python");

        System.out.println(result);
    }
}