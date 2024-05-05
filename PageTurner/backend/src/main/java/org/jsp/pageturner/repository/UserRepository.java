package org.jsp.pageturner.repository;

import java.util.List;
import java.util.Optional;

import org.jsp.pageturner.model.Book;
import org.jsp.pageturner.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	public Optional<User> findByEmailAndPassword(String email,String password);
	
	public List<Book> findBookById(int id);
}
