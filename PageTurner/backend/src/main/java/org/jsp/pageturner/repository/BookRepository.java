package org.jsp.pageturner.repository;

import org.jsp.pageturner.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
