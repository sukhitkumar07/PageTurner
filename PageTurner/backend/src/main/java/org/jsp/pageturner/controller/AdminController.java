package org.jsp.pageturner.controller;

import org.jsp.pageturner.dto.ResponseStructure;
import org.jsp.pageturner.model.Admin;
import org.jsp.pageturner.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping
	@CrossOrigin
	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(@RequestBody Admin admin, HttpServletRequest request) {
		return adminService.saveAdmin(admin,request);
	}
	
	@PostMapping("/verify-by-email")
	public ResponseEntity<ResponseStructure<Admin>> verifyByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
		return adminService.findByEmailAndPassword(email, password);
	}
	
	
	@GetMapping("/activate")
	public ResponseEntity<ResponseStructure<String>> activate(@RequestParam String token) {
		return adminService.activate(token);
	}
}

