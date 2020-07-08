package org.example.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity
{
    private Integer id;

    private String firstName;

    private String lastName;

    private boolean active;

    @Id
    @Column(name = "id")
    @GeneratedValue
    public Integer getId()
    {
        return id;
    }

    public void setId(final Integer id)
    {
        this.id = id;
    }

    @Basic
    @Column(name = "first_name")
    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(final String firstName)
    {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "last_name")
    public String getLastName()
    {
        return lastName;
    }

    public void setLastName(final String lastName)
    {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "active")
    public boolean isActive()
    {
        return active;
    }

    public void setActive(final boolean active)
    {
        this.active = active;
    }
}
