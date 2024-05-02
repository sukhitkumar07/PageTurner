package org.jsp.pageturner.dao;


import java.util.List;
import java.util.Optional;

import org.jsp.pageturner.model.Book;
import org.jsp.pageturner.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BookDao {
	@Autowired
	private BookRepository bookRepository;

	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}
	
	public List<Book> findAll(){
		return bookRepository.findAll();
	}
	
	public List<Book> findByAdminId(int admin_id){
		return bookRepository.findByAdminId(admin_id);
	}
	
	public Optional<Book> findById(int id) {
		return bookRepository.findById(id);
	}
	
	public Optional<Book> findByName(String name) {
		return bookRepository.findByName(name);
	}
	
	public List<Book> findByCategory(String category){
		return bookRepository.findByCategory(category);
	}

	
	
	
	
	
	
	
}
