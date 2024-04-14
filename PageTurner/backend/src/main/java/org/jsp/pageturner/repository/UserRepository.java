package org.jsp.pageturner.repository;

import org.jsp.pageturner.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{

}
