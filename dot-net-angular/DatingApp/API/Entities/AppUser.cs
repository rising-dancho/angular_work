namespace API.Entities;

// IN ENTITY FRAMEWORK: AN ENTITY REPRESENTS A TABLE
public class AppUser
{
    // access modifier: public, private, internal
    public int Id { get; set; }
    // required keyword to make sure this property is required
    public required string UserName { get; set; }
}