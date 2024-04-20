package org.jsp.pageturner.repository;

import java.util.Optional;

import org.jsp.pageturner.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	public Optional<Admin> findById(int id);
	public Optional<Admin> findByEmailAndPassword(String email,String password);
}
