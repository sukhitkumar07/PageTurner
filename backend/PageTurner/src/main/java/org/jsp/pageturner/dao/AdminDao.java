package org.jsp.pageturner.dao;

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
}
