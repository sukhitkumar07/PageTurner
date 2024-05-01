package org.jsp.pageturner.service;

import java.util.Optional;

import org.jsp.pageturner.dao.AdminDao;
import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.exception.AdminNotFoundException;
import org.jsp.pageturner.model.Admin;
import org.jsp.pageturner.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private PageTurnerEmailService emailService;

	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(Admin admin, HttpServletRequest request) {
		ResponseStructure<Admin> structure = new ResponseStructure<>();
		admin.setStatus(AccountStatus.IN_ACTIVE.toString());
		admin.setToken(RandomString.make(45));
		String message = emailService.sendWelcomeMail(admin, request);
		structure.setMessage("Admin saved" + " , " + message);
		structure.setBody(adminDao.saveAdmin(admin));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure, HttpStatus.ACCEPTED);
	}

	public ResponseEntity<ResponseStructure<Admin>> findByEmailAndPassword(String email, String password) {
		ResponseStructure<Admin> structure = new ResponseStructure<>();
		Optional<Admin> recAdmin = adminDao.findByEmailAndPassword(email, password);
		if (recAdmin.isPresent()) {
			structure.setMessage("Admin Found ");
			structure.setBody(recAdmin.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure, HttpStatus.OK);
		} else
			throw new AdminNotFoundException("Invalid Credentials");

	}

	public ResponseEntity<ResponseStructure<String>> activate(String token) {
		Optional<Admin> recAdmin = adminDao.findByToken(token);
		ResponseStructure<String> structure = new ResponseStructure<>();
		if (recAdmin.isPresent()) {
			Admin admin = recAdmin.get();
			admin.setStatus(AccountStatus.ACTIVE.toString());
			admin.setToken(null);
			structure.setMessage("Admin Found");
			structure.setBody("Account Verified and Activated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			adminDao.saveAdmin(admin);
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.ACCEPTED);
		}
		throw new AdminNotFoundException("Invalid Url");
	}

}
