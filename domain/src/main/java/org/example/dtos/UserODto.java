package org.example.dtos;

public class UserODto
{
    public String firstName;
    public String lastName;
    public boolean active;

    public UserODto(final String firstName, final String lastName, final boolean active)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
    }
}
