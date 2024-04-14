package org.jsp.pageturner.dao;

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
}
