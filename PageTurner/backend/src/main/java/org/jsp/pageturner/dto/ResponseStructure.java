package org.jsp.pageturner.dto;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	private String message;
	private T body;
	private int statusCode;
}
