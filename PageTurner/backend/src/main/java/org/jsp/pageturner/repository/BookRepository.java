package org.jsp.pageturner.repository;

import java.util.List;

import org.jsp.pageturner.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

	public List<Book> findByAdminId(int admin_id);
}
