package com.example.contactListApp.repository;

import com.example.contactListApp.datamodel.People;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface PeopleRepository extends JpaRepository<People,Long> {
    List<People> findByName(String name);
    List<People> findAll();

    @Query(value = "SELECT name, url from People")
    List<People> findPeopleList();
}
