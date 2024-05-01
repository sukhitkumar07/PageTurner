package org.jsp.pageturner.service;

import org.jsp.pageturner.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import static org.jsp.pageturner.util.ApplicationConstants.VERIFY_LINK;;
@Service
public class PageTurnerEmailService {
	@Autowired
	private JavaMailSender javaMailSender;
	
	public String sendWelcomeMail (Admin admin,HttpServletRequest request) {
		String siteUrl=request.getRequestURL().toString();
		String url=siteUrl.replace(request.getServletPath(), "");
		String actual_url=url+VERIFY_LINK+admin.getToken();
		MimeMessage message=javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		
		try {
			helper.setTo(admin.getEmail());
			helper.setSubject("Activate Your Account");
			helper.setText(actual_url);
			javaMailSender.send(message);
			return "Verification Mail has been Sent";
		} catch (MessagingException e) {
			e.printStackTrace();
			return "Can't Send Verification Mail  ";
		}
	}
}
