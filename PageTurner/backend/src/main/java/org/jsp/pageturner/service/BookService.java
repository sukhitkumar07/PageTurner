package org.jsp.pageturner.service;

import java.util.Optional;

import org.jsp.pageturner.dao.AdminDao;
import org.jsp.pageturner.dao.BookDao;
import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.exception.BookNotFoundException;
import org.jsp.pageturner.model.Admin;
import org.jsp.pageturner.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BookService {
	@Autowired
	private BookDao bookDao;
	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<ResponseStructure<Book>> saveBook(Book book, int admin_id) {
		ResponseStructure<Book> structure = new ResponseStructure<>();
		Optional<Admin> recAdmin = adminDao.findById(admin_id);
		if (recAdmin.isPresent()) {
			recAdmin.get().getBooks().add(book);
			book.setAdmin(recAdmin.get());
			structure.setMessage("Book saved");
			structure.setBody(bookDao.saveBook(book));
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Book>>(structure, HttpStatus.CREATED);
		} else {
			throw new BookNotFoundException("Invalid Admin Id");
		}

	}
}
