package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.Teacher;
import com.example.form.TeacherForm;
import com.example.repository.TeacherRepository;

@Controller
@RequestMapping("/")
public class TeacherController {

	@Autowired
	private TeacherRepository teacherRepository;

	@RequestMapping("")
	public String index() {
		return "index";
	}

	@RequestMapping("/insert")
	public String insert(TeacherForm teacherForm) {
		for (Teacher teacher : teacherForm.getTeacherList()) {
				teacher.setUniversity(teacher.getUniversity());
				teacher.setName(teacher.getName());
				teacher.setSubject(teacher.getSubject());
				teacherRepository.insert(teacher);
				teacherRepository.delete(teacher);
		}
		return "redirect:/";
	}
}
