package org.example.controller;

import com.querydsl.jpa.impl.JPAQuery;
import org.example.dtos.UserODto;
import org.example.entities.QUserEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController
{
    @PersistenceContext
    private EntityManager entityManager;

    @RequestMapping(method = RequestMethod.GET)
    public List<UserODto> list()
    {
        // TODO: check
        final QUserEntity userEntity = QUserEntity.userEntity;
        return new JPAQuery<>(this.entityManager)
                .select(userEntity)
                .from(userEntity)
                .fetch().stream()
                .map(entity -> new UserODto(entity.getFirstName(), entity.getLastName(), entity.isActive()))
                .collect(Collectors.toList());
    }
}
