package org.jsp.pageturner.service;

import org.jsp.pageturner.dao.UserDao;
import org.jsp.pageturner.dto.ResponseStructure;
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
}
