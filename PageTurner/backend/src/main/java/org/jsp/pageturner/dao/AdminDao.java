package org.jsp.pageturner.dao;

import java.util.Optional;

import org.jsp.pageturner.model.Admin;
import org.jsp.pageturner.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {
	@Autowired
	private AdminRepository adminRepository;

	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	public Optional<Admin> findById(int id) {
		return adminRepository.findById(id);
	}
	
	public Optional<Admin> findByEmailAndPassword(String email,String password) {
		return adminRepository.findByEmailAndPassword(email, password);
	}
}
