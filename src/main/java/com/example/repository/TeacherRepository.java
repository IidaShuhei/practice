package com.example.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.example.domain.Teacher;

@Repository
public class TeacherRepository {

	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public void insert(Teacher teacher) {
		String sql = "insert into teachers(university,name,subject)values(:university,:name,:subject)";
		SqlParameterSource param = new BeanPropertySqlParameterSource(teacher);
		template.update(sql, param);
	}
	
	public void delete(Teacher teacher) {
		String sql = "delete from teachers where university is null and name is null and subject is null";
		SqlParameterSource param = new BeanPropertySqlParameterSource(teacher);
		template.update(sql, param);
	}
}
