package org.jsp.pageturner.controller;

import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.model.User;
import org.jsp.pageturner.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping
	@CrossOrigin
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@PostMapping("/verify-by-email")
	public ResponseEntity<ResponseStructure<User>> verifyByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
		return userService.findByEmailAndPassword(email, password);
	}
}
