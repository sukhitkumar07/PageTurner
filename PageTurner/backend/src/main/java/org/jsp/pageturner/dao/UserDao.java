package org.jsp.pageturner.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.pageturner.model.Book;
import org.jsp.pageturner.model.User;
import org.jsp.pageturner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository userRepository;

	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public Optional<User> findByEmailAndPassword(String email,String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	public Optional<User> findById(int id) {
		return userRepository.findById(id);
	}
	
	public List<Book> findBookById(int id) {
		return findBookById(id);
	}
}
