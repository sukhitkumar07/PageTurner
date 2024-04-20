package org.jsp.pageturner.service;

import java.util.Optional;

import org.jsp.pageturner.dao.AdminDao;
import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.exception.AdminNotFoundException;
import org.jsp.pageturner.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(Admin admin) {
		ResponseStructure<Admin> structure = new ResponseStructure<>();
		structure.setMessage("Admin Saved Successfully");
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

}
