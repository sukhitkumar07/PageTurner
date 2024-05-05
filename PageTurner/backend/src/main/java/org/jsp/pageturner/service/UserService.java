package org.jsp.pageturner.service;

import java.util.List;
import java.util.Optional;

import org.jsp.pageturner.dao.UserDao;
import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.exception.AdminNotFoundException;
import org.jsp.pageturner.exception.BookNotFoundException;
import org.jsp.pageturner.model.Admin;
import org.jsp.pageturner.model.Book;
import org.jsp.pageturner.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	public ResponseEntity<ResponseStructure<User>> saveUser(User user) {
		ResponseStructure<User> structure = new ResponseStructure<>();
		structure.setMessage("User Saved Successfully");
		structure.setBody(userDao.saveUser(user));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<User>> findByEmailAndPassword(String email, String password) {
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = userDao.findByEmailAndPassword(email, password);
		if (recUser.isPresent()) {
			structure.setMessage("User Found ");
			structure.setBody(recUser.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		} else
			throw new AdminNotFoundException("Invalid Credentials");

	}
	
	public ResponseEntity<ResponseStructure<List<Book>>> findBookById(int id) {
		ResponseStructure<List<Book>> structure=new ResponseStructure<>();
		List<Book> recBooks=userDao.findBookById(id);
		if(!recBooks.isEmpty()) {
			structure.setMessage("Book found");
			structure.setBody(recBooks);
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<List<Book>>>(structure,HttpStatus.OK);
		}
		throw new BookNotFoundException("Invalid id");
	}
}
